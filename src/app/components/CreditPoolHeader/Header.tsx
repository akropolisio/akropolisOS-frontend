import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { NavInline } from 'components';
import { Adaptive } from 'services/adaptability';
import { ThemeButton } from 'services/theme';
import { LogoWithNameIcon } from 'shared/view/elements/Icons';
import { IMenuItem } from 'shared/types/common';

import { menuItems } from './constants';
import { useStyles } from './Header.style';

interface Props {
  customNavItems?: IMenuItem[];
  CustomLogo?: typeof SvgIcon;
}

export function Header({ customNavItems, CustomLogo }: Props) {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <div className={classes.logo}>
        {CustomLogo ? <CustomLogo fontSize="inherit" /> : <LogoWithNameIcon fontSize="inherit" />}
      </div>
      <NavInline
        items={customNavItems || menuItems}
        className={classes.navInline}
        extraRight={[
          <React.Fragment key="0">
            <Adaptive to="tabletXS">
              <ThemeButton size="small" />
            </Adaptive>
            <Adaptive from="tabletXS">
              <ThemeButton />
            </Adaptive>
          </React.Fragment>,
        ]}
      />
    </header>
  );
}
