import React, { useCallback } from 'react';

import { Button, ButtonProps, ConfirmationDialog } from 'components';
import { useTranslate, tKeys as tKeysAll } from 'services/i18n';
import { useApi } from 'services/api';

type IProps = ButtonProps & {
  proposalId: string;
  borrower: string;
  loanAmount: string;
};

const tKeysConfirmation = tKeysAll.features.changeLoanState.exchangingConfirmation;
const tKeys = tKeysAll.features.changeLoanState.activateLoanButton;

function ActivateLoanButton(props: IProps) {
  const { borrower, proposalId, loanAmount, ...restProps } = props;
  const { t } = useTranslate();
  const api = useApi();

  const [isOpen, setIsOpen] = React.useState(false);

  const open = React.useCallback(() => setIsOpen(true), []);
  const close = React.useCallback(() => setIsOpen(false), []);

  const handleActivate = useCallback(async (): Promise<void> => {
    await api.loanModule.executeDebtProposal(borrower, proposalId, loanAmount);
    close();
  }, [borrower, proposalId, loanAmount]);

  return (
    <>
      <Button {...restProps} onClick={open} />
      <ConfirmationDialog
        isOpen={isOpen}
        message={t(tKeys.confirmMessage.getKey())}
        noText={t(tKeysConfirmation.no.getKey())}
        yesText={t(tKeysConfirmation.yes.getKey())}
        title={t(tKeysConfirmation.title.getKey())}
        onCancel={close}
        onConfirm={handleActivate}
      />
    </>
  );
}

export { ActivateLoanButton };
