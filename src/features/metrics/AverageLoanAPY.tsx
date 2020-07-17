import * as React from 'react';

import { Metric, Title, FormattedAmount } from 'components';
import { tKeys as tKeysAll, useTranslate } from 'services/i18n';
import { percentAmount } from 'utils/mock';

const tKeys = tKeysAll.components.metrics;

export function AverageLoanAPY() {
  const { t } = useTranslate();

  return (
    <Metric
      title={<Title>{t(tKeys.averageLoanAPY.getKey())}</Title>}
      value={<FormattedAmount sum={percentAmount} />}
    />
  );
}
