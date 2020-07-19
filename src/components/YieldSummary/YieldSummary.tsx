import React from 'react';

import { tKeys as tKeysAll, useTranslate } from 'services/i18n';
import { Title } from 'components/Title/Title';
import { ComingSoon } from 'components/ComingSoon/ComingSoon';
import { PeriodSwitch } from 'components/Chart/components/PeriodSwitch/PeriodSwitch';

import { useStyles } from './YieldSummary.style';

function YieldSummary() {
  const classes = useStyles();
  const { t } = useTranslate();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Title fontSize="large">{t(tKeysAll.components.yield.title.getKey())}</Title>
        <PeriodSwitch period="d" onSelect={() => {}} />
      </header>
      <ComingSoon />
      <div className={classes.chart} />
    </div>
  );
}

export { YieldSummary };
