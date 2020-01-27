import * as React from 'react';
import moment from 'moment';
import BN from 'bn.js';

import { BalanceChart, IChartPoint, Loading } from 'components';
import { useMyUserBalancesSubscription } from 'generated/gql/pool';
import { useApi } from 'services/api';
import { useSubscribable } from 'utils/react';

function UserBalanceChart() {
  const api = useApi();
  const [account, accountMeta] = useSubscribable(() => api.web3Manager.account, []);

  const [daiTokenInfo, daiTokenInfoMeta] = useSubscribable(() => api.getTokenInfo$('dai'), []);
  const decimals = daiTokenInfo?.decimals || 0;

  const lastYear = moment()
    .subtract(1, 'years')
    .unix(); // Date in seconds

  const balancesResult = useMyUserBalancesSubscription({
    variables: {
      first: 1000,
      address: account || '',
      date: `0x${lastYear.toString(16)}`, // Date in seconds
    },
  });
  const balances = balancesResult.data?.balances || [];

  const mockedPoints = React.useMemo(
    () => [
      {
        date:
          Date.now() -
          moment()
            .subtract(1, 'days')
            .unix() *
            1000, // Date in milliseconds
        value: 0,
      },
      { date: Date.now(), value: 0 }, // Date in milliseconds
    ],
    [Date],
  );

  const chartPoints: IChartPoint[] = React.useMemo(
    () =>
      (balances.length &&
        balances.map(balance => ({
          date: parseInt(balance.id, 16) * 1000, // Date in milliseconds
          value: new BN(balance.lBalance).div(new BN(10).pow(new BN(decimals))).toNumber(),
        }))) ||
      mockedPoints,
    [balances, mockedPoints],
  );

  return (
    <Loading gqlResults={balancesResult} meta={[accountMeta, daiTokenInfoMeta]}>
      <BalanceChart chartPoints={chartPoints} title="My balance" />
    </Loading>
  );
}

export { UserBalanceChart };
