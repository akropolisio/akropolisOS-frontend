import React, { FunctionComponent } from 'react';
import BN from 'bn.js';

import { useFormattedBalance } from 'utils/react';
import { Loading } from 'components/Loading';
import { Token } from 'model/types';

interface IProps {
  sum: BN | string;
  token: Token;
  children?: FunctionComponent<{ formattedBalance: string }>;
}

function FormattedBalance(props: IProps) {
  const { sum, token, children } = props;
  const [formattedBalance, formattedBalanceMeta] = useFormattedBalance(token, sum);

  return (
    <Loading
      meta={formattedBalanceMeta}
      progressVariant="circle"
      progressProps={{ size: '0.8em', color: 'inherit' }}
    >
      {children ? children({ formattedBalance }) : formattedBalance}
    </Loading>
  );
}

export { FormattedBalance };