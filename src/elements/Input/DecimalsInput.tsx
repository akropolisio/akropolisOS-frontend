import * as React from 'react';
import { GetProps } from '_helpers';
import BN from 'bn.js';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { formatBalance } from 'utils/bn/formatBalance';
import { TextInput } from 'elements/Input/TextInput';
import { fromBaseUnit, calculateNumberFromDecimals } from 'utils/bn';
import { useOnChangeState } from 'utils/react';

interface IOwnProps {
  baseDecimals: number;
  value: string;
  maxValue?: BN;
  onChange: (value: string) => void;
}

interface IOption<T> {
  value: T;
  text: string;
}

type IProps = IOwnProps & Omit<GetProps<typeof TextInput>, 'ref'>;

function DecimalsInput(props: IProps) {
  const { onChange, baseDecimals, value, maxValue, ...restInputProps } = props;

  const [siPrefix, setSiPrefix] = React.useState(getInitialPrefix(value, baseDecimals));
  const [suffix, setSuffix] = React.useState('');

  const amount = React.useMemo(
    () => value && fromBaseUnit(value, siPrefix + baseDecimals) + suffix,
    [value, suffix, siPrefix, baseDecimals],
  );

  useOnChangeState(
    baseDecimals,
    (prev, next) => prev !== next,
    (_prev, nextBaseDecimals) => setSiPrefix(getInitialPrefix(value, nextBaseDecimals)),
  );

  const handleSelectChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSiPrefix(Number(event.target.value));
      setSuffix('');

      const roundedAmount = getRoundedValue(amount, baseDecimals, Number(event.target.value));
      onChange(
        calculateNumberFromDecimals(roundedAmount, Number(event.target.value), baseDecimals),
      );
    },
    [amount, baseDecimals],
  );

  const handleInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValidationRegExp = new RegExp(`^$|^\\d+?\\.?\\d{0,${baseDecimals + siPrefix}}$`);

      if (inputValidationRegExp.test(event.target.value)) {
        const suffixRegExp = event.target.value.match(/^.+?(\.?0*)$/);

        if (suffixRegExp) {
          const [, currentSuffix] = suffixRegExp;
          setSuffix(currentSuffix);
        }

        onChange(
          event.target.value &&
            calculateNumberFromDecimals(event.target.value, siPrefix, baseDecimals),
        );
      }
    },
    [siPrefix, baseDecimals],
  );

  const handleMaxButtonClick = React.useCallback(() => {
    setSuffix('');
    maxValue && onChange(maxValue.toString());
  }, [onChange, maxValue && maxValue.toString()]);

  const options = React.useMemo(
    () =>
      formatBalance.getOptions(baseDecimals).map(
        ({ power, text }): IOption<number> => ({
          value: power,
          text,
        }),
      ),
    [baseDecimals],
  );

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <TextInput
            {...restInputProps}
            value={amount}
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
            InputProps={{
              endAdornment: maxValue && (
                <Button color="primary" onClick={handleMaxButtonClick}>
                  MAX
                </Button>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            select
            value={siPrefix}
            onChange={handleSelectChange}
            variant="outlined"
            fullWidth
          >
            {options.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.text}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </>
  );
}

function getInitialPrefix(amount: string, baseDecimals: number): number {
  const remainder = baseDecimals % 3;

  const [, zeros] =
    amount.match(new RegExp(`^.+?((000)+?(${'0'.repeat(remainder)}))$`)) || ([] as undefined[]);

  const prefix = zeros ? zeros.length - baseDecimals : 0;

  return prefix;
}

function getRoundedValue(value: string, baseDecimals: number, siPrefix: number): string {
  const [whole, fraction] = value.split('.');
  const isValueNeedToBeRounded = fraction && fraction.length - siPrefix > baseDecimals;

  if (isValueNeedToBeRounded) {
    return [whole, fraction.substr(0, baseDecimals + siPrefix)].join('.');
  }

  return value;
}

export { DecimalsInput };
