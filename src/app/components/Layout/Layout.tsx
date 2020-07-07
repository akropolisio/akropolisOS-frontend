import React from 'react';
import cn from 'classnames';

import { attachStaticFields } from 'shared/helpers/object';
import { AkropolisSocialLinks } from 'components';

import { useStyles } from './Layout.style';
import { TopWave, BottomWave } from './waves';

interface IOwnProps {
  children: React.ReactNode;
}

type IProps = IOwnProps;

function LayoutComponent({ children }: IProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
      <div className={classes.socials}>
        <AkropolisSocialLinks direction="column" />
      </div>
    </div>
  );
}

function WrapTopWave({ type, children }: { type: 'top' | 'bottom'; children: React.ReactNode }) {
  const classes = useStyles();
  const wave = {
    top: <TopWave className={cn(classes.wave, classes[type])} />,
    bottom: <BottomWave className={cn(classes.wave, classes[type])} />,
  }[type];

  return (
    <div className={cn(classes.withWave, classes[type])}>
      <div className={classes.waveContainer}>
        {type === 'top' && <div className={classes.waveStrut} />}
        {wave}
        {type === 'bottom' && <div className={classes.waveStrut} />}
      </div>
      {children}
    </div>
  );
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Header({ children, className }: ContainerProps) {
  const classes = useStyles();
  return <div className={cn(className, classes.container, classes.header)}>{children}</div>;
}

function Container({ children, className }: ContainerProps) {
  const classes = useStyles();
  return <div className={cn(className, classes.container)}>{children}</div>;
}

function Footer({ children, className }: ContainerProps) {
  const classes = useStyles();
  return <div className={cn(className, classes.container, classes.footer)}>{children}</div>;
}

export const Layout = attachStaticFields(LayoutComponent, {
  Header,
  Container,
  Footer,
  WrapTopWave,
});
