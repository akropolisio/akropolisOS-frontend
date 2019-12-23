import React, { useMemo, useCallback } from 'react';
import BN from 'bn.js';
import { Form, FormSpy } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import * as R from 'ramda';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Observable } from 'rxjs';

import { useTranslate, tKeys as tKeysAll } from 'services/i18n';
import { useApi } from 'services/api';
import { DecimalsField, SpyField } from 'components/form';
import { Hint } from 'components/Hint/Hint';
import { Loading } from 'components/Loading';
import {
  validateInteger,
  validatePositiveNumber,
  lessThenOrEqual,
  composeValidators,
  isRequired,
  moreThen,
} from 'utils/validators';
import { useSubscribable, useFormattedBalance } from 'utils/react';
import { compareBn } from 'utils/bn';
import { Token } from 'model/types';

import { TargetAmountField } from './TargetAmountField';

export interface IFormData {
  sourceAmount: string;
  targetAmount: null | BN;
  triggerRevalidateByMax: BN | undefined;
  triggerRevalidateByFormatMax: () => string;
}

const fieldNames: { [K in keyof IFormData]: K } = {
  sourceAmount: 'sourceAmount',
  targetAmount: 'targetAmount',
  triggerRevalidateByMax: 'triggerRevalidateByMax',
  triggerRevalidateByFormatMax: 'triggerRevalidateByFormatMax',
};

export type Direction = 'PtkToDai' | 'DaiToPtk' | 'DaiToLoanCollateral';

export interface ISubmittedFormData {
  sourceAmount: BN;
  targetAmount: BN;
}

interface IProps<ExtraFormData extends Record<string, any> = {}> {
  account: string;
  direction: Direction;
  title: string;
  sourceToken: Token;
  targetToken: Token;
  sourcePlaceholder: string;
  calculatedAmountTKey?: string;
  additionalFields?: React.ReactNode[];
  additionalInitialValues?: ExtraFormData;
  onSubmit: (values: ISubmittedFormData & Omit<ExtraFormData, keyof ISubmittedFormData>) => void;
  onCancel: () => void;
}

function PTokenExchangingForm<ExtraFormData extends Record<string, any> = {}>(
  props: IProps<ExtraFormData>,
) {
  const {
    account,
    direction,
    title,
    sourceToken,
    targetToken,
    onSubmit,
    onCancel,
    sourcePlaceholder,
    calculatedAmountTKey,
    additionalFields,
    additionalInitialValues = {} as ExtraFormData,
  } = props;

  const { t } = useTranslate();
  const tKeys = tKeysAll.features.cashExchange.exchangingForm;

  const api = useApi();

  const methodByDirection: Record<Direction, () => Observable<BN>> = {
    DaiToPtk: () => api.getBalance$('dai', account),
    PtkToDai: () => api.getBalance$('ptk', account),
    DaiToLoanCollateral: () => api.getMaxAvailableLoanSize$(account),
  };

  const [maxValue] = useSubscribable(() => methodByDirection[direction](), []);

  const initialValues = useMemo<IFormData & ExtraFormData>(
    () => ({
      sourceAmount: '',
      targetAmount: null,
      triggerRevalidateByMax: maxValue,
      triggerRevalidateByFormatMax: () => '0',
      ...additionalInitialValues,
    }),
    [],
  );

  const [sourceTokenInfo, sourceTokenInfoMeta] = useSubscribable(
    () => api.getTokenInfo$(sourceToken),
    [],
  );

  const [formattedMax] = useFormattedBalance(targetToken, maxValue || new BN(0));
  const formatMax = useCallback(() => formattedMax, [formattedMax]);

  const validateAmount = useMemo(() => {
    return composeValidators(
      isRequired,
      validateInteger,
      validatePositiveNumber,
      /* eslint-disable no-underscore-dangle */
      R.curry(moreThen)(new BN(0), R.__, undefined as any),
      ...(maxValue ? [R.curry(lessThenOrEqual)(maxValue, R.__, formatMax)] : []),
      /* eslint-enable no-underscore-dangle */
    );
  }, [maxValue, formatMax]);

  const handleFormSubmit = useCallback(
    ({
      sourceAmount,
      targetAmount,
      ...restValues
    }: IFormData & ExtraFormData): { [FORM_ERROR]: string } | void => {
      if (!targetAmount) {
        return { [FORM_ERROR]: t(tKeys.targetAmountError.getKey()) };
      }

      onSubmit({ sourceAmount: new BN(sourceAmount), targetAmount, ...restValues });
    },
    [onSubmit, FORM_ERROR, t],
  );

  return (
    <Loading meta={sourceTokenInfoMeta}>
      <Form
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        subscription={{ submitError: true, submitting: true, dirtySinceLastSubmit: true }}
      >
        {({ handleSubmit, submitError, submitting, dirtySinceLastSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid container justify="center" spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  {title}
                </Typography>

                {sourceTokenInfo && (
                  <DecimalsField
                    maxValue={maxValue}
                    validate={validateAmount}
                    baseDecimals={sourceTokenInfo.decimals}
                    baseUnitName={sourceTokenInfo.symbol}
                    name={fieldNames.sourceAmount}
                    placeholder={sourcePlaceholder}
                  />
                )}
                <SpyField
                  name={fieldNames.triggerRevalidateByMax}
                  fieldValue={maxValue}
                  compare={compareBn}
                />
                <SpyField name={fieldNames.triggerRevalidateByFormatMax} fieldValue={formatMax} />
              </Grid>
              {additionalFields?.map((item, index) => (
                <Grid key={index} item xs={12}>
                  {item}
                </Grid>
              ))}
              <FormSpy subscription={{ values: true }}>
                {({ values }) => (
                  <Grid item xs={12}>
                    <TargetAmountField
                      direction={direction}
                      sourceAmount={values.sourceAmount}
                      targetToken={targetToken}
                      spyFieldName={fieldNames.targetAmount}
                      messageTKey={calculatedAmountTKey}
                    />
                  </Grid>
                )}
              </FormSpy>
              {!dirtySinceLastSubmit && !!submitError && (
                <Grid item xs={12}>
                  <Hint>
                    <Typography color="error">{submitError}</Typography>
                  </Hint>
                </Grid>
              )}
              <Grid item xs={6}>
                <Button variant="outlined" color="primary" fullWidth onClick={onCancel}>
                  {t(tKeys.cancelButtonText.getKey())}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  disabled={submitting}
                >
                  {submitting ? <CircularProgress size={24} /> : 'submit'}
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Form>
    </Loading>
  );
}

export { PTokenExchangingForm };