import * as React from 'react';
import * as R from 'ramda';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, ResponsiveContainer } from 'recharts';

import { makeFormatDateByPeriod, getTicks } from './helpers';
import { useStyles } from './BalanceChart.style';

export type Period = '24h' | '1w' | '1m' | '6m' | 'all';

export interface IPoint {
  date: number;
  value: number;
}

interface IProps {
  points: IPoint[];
}

function BalanceChart(props: IProps) {
  const { points } = props;
  const classes = useStyles();

  const initialPeriod = React.useMemo(() => getTicks(points, 'all').realPeriod, []);
  const [period, setPeriod] = React.useState<Period>(initialPeriod);

  const { ticks, realPeriod } = getTicks(points, period);

  const firstTick = R.head(ticks);

  if (!firstTick) {
    return null;
  }

  const formatTick = React.useMemo(() => makeFormatDateByPeriod(realPeriod, firstTick.date), [
    realPeriod,
    firstTick.date,
  ]);

  const renderTick = React.useCallback(
    ({ x, y, payload, index, visibleTicksCount }) => {
      const display =
        visibleTicksCount > 12 && (realPeriod === '24h' || realPeriod === '1m') && index % 2 !== 0
          ? 'none'
          : 'block';

      return (
        <g transform={`translate(${x},${y})`}>
          <text
            x={0}
            y={0}
            dy={16}
            textAnchor="middle"
            className={classes.tick}
            style={{ display }}
          >
            {formatTick(payload.value)}
          </text>
        </g>
      );
    },
    [formatTick],
  );

  return (
    <div className={classes.root}>
      <div className={classes.graphic}>
        <ResponsiveContainer>
          <LineChart data={ticks} margin={{ left: 18, right: 18 }}>
            <XAxis
              dataKey="date"
              type="number"
              axisLine={false}
              interval={0}
              domain={[ticks[0].date, ticks[ticks.length - 1].date]}
              allowDataOverflow
              ticks={R.pluck('date', ticks)}
              tickSize={0}
              tick={renderTick}
            />
            <YAxis padding={{ top: 30, bottom: 1 }} hide />
            <CartesianGrid stroke="#EAE9ED" horizontal={false} />
            <Line
              dataKey="value"
              stroke="#613AAF"
              strokeWidth={2}
              dot={false}
              connectNulls
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <PeriodSwitch period={period} onSelect={setPeriod} />
    </div>
  );
}

interface IPeriodSwitchProps {
  period: Period;
  onSelect(period: Period): void;
}

const periods: Period[] = ['24h', '1w', '1m', '6m', 'all'];

function PeriodSwitch(props: IPeriodSwitchProps) {
  const { period: selectedPeriod, onSelect } = props;
  const classes = useStyles();

  const selectPeriod = React.useCallback(
    (period: Period) => () => {
      onSelect(period);
    },
    [onSelect],
  );

  return (
    <Grid container wrap="nowrap" spacing={2} justify="space-between">
      {periods.map(period => (
        <Grid item key={period}>
          <Button
            variant="contained"
            color={period === selectedPeriod ? 'primary' : undefined}
            onClick={selectPeriod(period)}
            className={classes.switchButton}
          >
            {period}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export { BalanceChart };
