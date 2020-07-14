import React from 'react';
import cn from 'classnames';

import { PRIVACY_POLICY_URL, T_AND_C_URL } from 'docs';
import { tKeys } from 'services/i18n';

import { routes } from '../../routes';
import * as Link from '../Link';
import { useStyles } from './Sidebar.style';
import * as icons from './icons';
import * as components from './components';
import { SidebarIconProps } from './icons/models';

const upperLinks: Link.models.Link[] = [
  {
    kind: 'internal',
    ref: routes.account.getRoutePath(),
    label: tKeys.modules.navigation.account.getKey(),
    renderIcon: makeIconRenderer(icons.Account),
  },

  {
    kind: 'internal',
    ref: routes.lend.getRoutePath(),
    label: tKeys.modules.navigation.lend.getKey(),
    renderIcon: makeIconRenderer(icons.Lend),
  },

  {
    kind: 'internal',
    ref: routes.borrow.getRoutePath(),
    label: tKeys.modules.navigation.borrow.getKey(),
    renderIcon: makeIconRenderer(icons.Borrow),
  },

  {
    kind: 'internal',
    ref: routes.liquidations.getRoutePath(),
    label: tKeys.modules.navigation.liquidations.getKey(),
    renderIcon: makeIconRenderer(icons.Liquidations),
  },

  {
    kind: 'internal',
    ref: routes.history.getRoutePath(),
    label: tKeys.modules.navigation.history.getKey(),
    renderIcon: makeIconRenderer(icons.History),
  },
];

const lowerLinks: Link.models.Link[] = [
  {
    kind: 'external',
    label: tKeys.modules.navigation.privacyPolicy.getKey(),
    ref: PRIVACY_POLICY_URL,
  },
  {
    kind: 'external',
    label: tKeys.modules.navigation.termsConditions.getKey(),
    ref: T_AND_C_URL,
  },
];

export const Sidebar: React.FC = () => {
  const classes = useStyles();

  const [isExpanded, setIsExpanded] = React.useState(true);

  return (
    <div
      className={cn({
        [classes.root]: true,
        [classes.rootShort]: !isExpanded,
      })}
    >
      <div className={classes.upperPart}>
        <nav className={classes.upperLinks}>{upperLinks.map(makeLinkRenderer(isExpanded))}</nav>
      </div>
      <div className={classes.lowerPart}>
        {isExpanded && <LowerLinks />}
        {renderSwitch()}
      </div>
    </div>
  );

  function renderSwitch() {
    return (
      <button
        type="button"
        className={cn({
          [classes.switch]: true,
          [classes.switchInverted]: !isExpanded,
        })}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <icons.Switch />
      </button>
    );
  }
};

const LowerLinks: React.FC = () => {
  const classes = useStyles();

  return <nav className={classes.lowerLinks}>{lowerLinks.map(makeLinkRenderer(true))}</nav>;
};

function makeLinkRenderer(shouldRenderLabel: boolean) {
  return (link: Link.models.Link) => {
    return <components.Link key={link.label} link={link} shouldRenderLabel={shouldRenderLabel} />;
  };
}

function makeIconRenderer(Icon: React.ComponentType<SidebarIconProps>) {
  return (isActive: boolean) => <Icon fontSize="inherit" withGradient={isActive} />;
}