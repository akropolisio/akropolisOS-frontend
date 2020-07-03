import { SPARTA_PRIVACY_POLICY_URL, SPARTA_T_AND_C_URL } from 'assets';
import { IMenuItem } from 'shared/types/common';
import { tKeys } from 'services/i18n';
import { Benefit } from 'app/components/Benefits/Benefits';

export const menuItems: IMenuItem[] = [
  {
    path: '#',
    title: tKeys.modules.navigation.tutorials.getKey(),
    isExternal: true,
  },
  {
    path: 'https://wiki.akropolis.io',
    title: tKeys.modules.navigation.wiki.getKey(),
    isExternal: true,
  },
];

export const footerNavItems: IMenuItem[] = [
  {
    path: SPARTA_PRIVACY_POLICY_URL,
    title: tKeys.modules.navigation.privacyPolicy.getKey(),
  },
  {
    path: SPARTA_T_AND_C_URL,
    title: tKeys.modules.navigation.termsConditions.getKey(),
  },
];

export const benefits: Benefit[] = [
  {
    title: 'Undercollateralised loans',
    description: 'take up to 2x from your collateral',
  },
  {
    title: 'Higher APR',
    description: 'rebalancing between DeFi protocol with RAY (soonTM)',
  },
  {
    title: 'Passive savings',
    description: 'earn rewards from pool activity and rising liquidity',
  },
];
