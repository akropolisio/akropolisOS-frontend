import React from 'react';
import Divider from '@material-ui/core/Divider';

import { MyBalance, MyPoolShare, APY, AKRO } from 'components/Metrics';
import { Grid, Typography, PortfolioSnapshot } from 'components';
import { MyLoans, MyGuarantees } from 'features/loans';
import { makeStyles } from 'utils/styles';

import { WithAccount } from '../../components/WithAccount/WithAccount';

export function AccountPage() {
  const classes = useStyles();
  return (
    <WithAccount>
      {({ account }) => (
        <Grid container spacing={3} justify="space-between">
          <Grid item container xs={12}>
            <Grid item xs className={classes.metric}>
              <MyBalance
                decimal={{
                  integral: '126,917',
                  fractional: '25',
                }}
                onDepositClick={() => undefined}
              />
            </Grid>
            <Grid item xs className={classes.metric}>
              <MyPoolShare
                percent="0.15"
                totalPoolLiquidityDecimal={{
                  integral: '2,750,800',
                  fractional: '00',
                }}
              />
            </Grid>
            <Divider orientation="vertical" className={classes.divider} />
            <Grid item xs className={classes.metric}>
              <APY percent="11.06" period="24h" onWithdrawClick={() => undefined} />
            </Grid>
            <Grid item xs className={classes.metric}>
              <AKRO
                decimal={{
                  integral: '357,856',
                  fractional: '45',
                }}
                total="$2,351.00"
              />
            </Grid>
          </Grid>
          <Divider />
          <Grid container>
            <Grid item xs={8} className={classes.portfolioSnapshot}>
              <PortfolioSnapshot
                data={[
                  {
                    asset: 'DAI',
                    apy: '0.25%',
                    earned: '100,220.45',
                    balance: '123,220.45',
                  },
                  {
                    asset: 'USDC',
                    apy: '0.25%',
                    earned: '100,220.45',
                    balance: '123,220.45',
                  },
                  {
                    asset: 'USDT',
                    apy: '0.25%',
                    earned: '100,220.45',
                    balance: '123,220.45',
                  },
                  {
                    asset: 'TUSD',
                    apy: '0.25%',
                    earned: '100,220.45',
                    balance: '123,220.45',
                  },
                ]}
                loansIssued="6,193.38"
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Lending
            </Typography>
            <MyGuarantees account={account} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Borrowing
            </Typography>
            <MyLoans account={account} />
          </Grid>
        </Grid>
      )}
    </WithAccount>
  );
}

const useStyles = makeStyles(
  () => ({
    metric: {
      height: 300,
    },
    divider: {
      height: 119,
      marginLeft: 60,
      marginRight: 60,
    },
    portfolioSnapshot: {
      marginLeft: 30,
    },
  }),
  { name: 'AccountPage' },
);
