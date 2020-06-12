import React from 'react';
import Button from '@material-ui/core/Button';

import { useTranslate, tKeys as tKeysAll } from 'services/i18n';
import { BuyCashIcon } from 'components/icons';
import { ModalButton } from 'components/ModalButton/ModalButton';
import { WithAccount } from 'app/components/WithAccount/WithAccount';

import { BuyingShareForm } from './BuyingShareForm';

type IProps = React.ComponentPropsWithoutRef<typeof Button>;

const tKeys = tKeysAll.features.buyShare;

export function BuyingShareButton(props: IProps) {
  const { t } = useTranslate();

  return (
    <ModalButton
      startIcon={<BuyCashIcon />}
      content={t(tKeys.buttonTitle.getKey())}
      fullWidth
      {...props}
    >
      {({ closeModal }) => (
        <WithAccount>
          {({ account }) => <BuyingShareForm account={account} onCancel={closeModal} />}
        </WithAccount>
      )}
    </ModalButton>
  );
}