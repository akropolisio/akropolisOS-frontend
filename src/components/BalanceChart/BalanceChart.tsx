import * as React from 'react';
import BN from 'bn.js';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { Chart, IPoint } from 'components/Chart/Chart';
import { Growth } from 'components/Growth/Growth';
import { FormattedBalance } from 'components/FormattedBalance/FormattedBalance';

import { useStyles } from './BalanceChart.style';

interface IProps {
  title: string;
  membersLength?: number;
  chartPoints: IChartPoint[];
  currentBalance: string;
}

export interface IChartPoint {
  date: number;
  value: number;
}

interface IPeriodInfo {
  firstPoint: IPoint;
  lastPoint: IPoint;
  period: string;
}

const BalanceChart = (props: IProps) => {
  const { title, membersLength, chartPoints, currentBalance } = props;
  const classes = useStyles();
  const [periodInfo, setPeriodInfo] = React.useState<IPeriodInfo | null>(null);

  const handleChartPeriodChange = React.useCallback(
    (firstPoint: IPoint, lastPoint: IPoint, period: string) => {
      setPeriodInfo({
        firstPoint,
        lastPoint,
        period,
      });
    },
    [],
  );

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={6}>
            <Typography className={classes.title} variant="subtitle2">
              {title}
            </Typography>
          </Grid>
          {(membersLength && (
            <Grid item xs={6}>
              <Grid container wrap="nowrap" direction="row-reverse">
                <div className={classes.membersCount}>
                  <Typography variant="subtitle2">{membersLength}</Typography>
                </div>
              </Grid>
            </Grid>
          )) ||
            null}
          <Grid item xs={12}>
            <Typography className={classes.balanceValue} variant="h4">
              {periodInfo && (
                <>
                  <FormattedBalance sum={currentBalance} token="dai" />{' '}
                  <Growth
                    className={classes.growth}
                    previous={new BN(periodInfo.firstPoint.value * 100)}
                    current={new BN(periodInfo.lastPoint.value * 100)}
                  />
                </>
              )}
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.graphic}>
          <Chart points={chartPoints} onPeriodChange={handleChartPeriodChange} />
        </div>
      </CardContent>
    </Card>
  );
};

export { BalanceChart };
