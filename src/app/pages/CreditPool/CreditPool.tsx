import * as React from 'react';

import { Layout, Benefits } from 'components';
import { Header } from 'app/components/CreditPoolHeader/Header';
import { Footer } from 'app/components/Footer/Footer';
import { makeStyles } from 'shared/styles';

import { CreditPoolIntro } from './Intro/Intro';
import { CreditPoolLogo } from './Icons';
import { benefits, footerNavItems } from './constants';

export function CreditPool() {
  const classes = useStyles();
  return (
    <Layout>
      <Layout.Header>
        <Header CustomLogo={CreditPoolLogo} customNavItems={[]} />
      </Layout.Header>
      <Layout.Container>
        <CreditPoolIntro />
        <Benefits benefits={benefits} className={classes.section} />
      </Layout.Container>
      <Layout.Footer>
        <Footer customNavItems={footerNavItems} />
      </Layout.Footer>
    </Layout>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.colors.athensGray : theme.colors.shark,
    },
  },

  section: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.up('tabletSM')]: {
      marginTop: theme.spacing(7.5),
    },

    '&:last-child': {
      marginBottom: theme.spacing(3.75),
      [theme.breakpoints.up('tabletSM')]: {
        marginBottom: theme.spacing(7.5),
      },
    },
  },
}));
