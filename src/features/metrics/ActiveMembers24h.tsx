import * as React from 'react';

import { Metric, Title, FormattedAmount } from 'components';
import { tKeys as tKeysAll, useTranslate } from 'services/i18n';
import { tokenAmount } from 'utils/mock';

const tKeys = tKeysAll.components.metrics;

export function ActiveMembers24h() {
  const { t } = useTranslate();

  return (
    <Metric
      title={<Title>{t(tKeys.dayChange.getKey())}</Title>}
      value={<FormattedAmount sum={tokenAmount} />}
    />
  );
}
