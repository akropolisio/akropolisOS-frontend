import React, { useMemo } from 'react';
import BN from 'bn.js';
import { of } from 'rxjs';

import { useMyUserSubscription } from 'generated/gql/pool';
import { useTranslate, tKeys as tKeysAll } from 'services/i18n';
import { useApi } from 'services/api';
import { useSubscribable } from 'utils/react';
import { IMetric, Loading, MetricsList } from 'components';

const tKeys = tKeysAll.features.personalInformation;

type Props = Pick<React.ComponentProps<typeof MetricsList>, 'orientation' | 'withDividers'>;

function PersonalMetrics(props: Props) {
  const { t } = useTranslate();

  const api = useApi();
  const [account, accountMeta] = useSubscribable(() => api.web3Manager.account, []);

  const myUserResult = useMyUserSubscription({
    variables: {
      address: account?.toLowerCase() || '',
    },
  });

  const myUser = myUserResult.data?.user;
  const lCredit = new BN(myUser?.credit || '0');
  const prevLAvailableBalance = new BN(myUser?.lBalance || '0');
  const pAvailableBalance = new BN(myUser?.pBalance || '0');

  const [{ user: lAvailableBalance }, lAvailableBalanceMeta] = useSubscribable(
    () =>
      pAvailableBalance.isZero()
        ? of({ user: new BN(0) })
        : api.fundsModule.getPtkToDaiExitInfo$(pAvailableBalance.toString()),
    [pAvailableBalance.toString()],
    { user: new BN(0) },
  );

  const metrics = useMemo<IMetric[]>(
    () => [
      {
        title: t(tKeys.availableBalance.getKey()),
        value: lAvailableBalance.toString(),
        previousValue: prevLAvailableBalance.toString(),
        token: 'dai',
        isCashMetric: true,
      },
      {
        title: t(tKeys.credit.getKey()),
        value: lCredit.toString(),
        token: 'dai',
        isCashMetric: true,
      },
    ],
    [t, lAvailableBalance.toString(), prevLAvailableBalance.toString(), lCredit.toString()],
  );

  return (
    <Loading
      gqlResults={myUserResult}
      meta={[accountMeta, lAvailableBalanceMeta]}
      progressVariant="circle"
    >
      <MetricsList {...props} metrics={metrics} />
    </Loading>
  );
}

export { PersonalMetrics };
