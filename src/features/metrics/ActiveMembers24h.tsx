import * as React from 'react';

import { Metric, Title, Grid, ChartBlock } from 'components';
import { tKeys as tKeysAll, useTranslate } from 'services/i18n';

const tKeys = tKeysAll.components.metrics;

const valueMock = '200';

export function ActiveMembers24h() {
  const { t } = useTranslate();

  return (
    <Grid container>
      <Metric title={<Title>{t(tKeys.dayChange.getKey())}</Title>} value={valueMock} />
      <ChartBlock value="1234" variant="increase" sign="+" />
    </Grid>
  );
}
