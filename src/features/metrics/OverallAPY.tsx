import * as React from 'react';

import { tKeys as tKeysAll, useTranslate } from 'services/i18n';
import { Label, FormattedAmount, Metric, ChartBlock } from 'components';
import { percentAmount } from 'utils/mock';

const tKeys = tKeysAll.components.metrics.overallAPY;

export function OverallAPY() {
  const { t } = useTranslate();

  return (
    <Metric
      title={<Label withComingSoon>{t(tKeys.label.getKey())}</Label>}
      value={<FormattedAmount sum={percentAmount} />}
      chart={<ChartBlock />}
    />
  );
}
