import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { getTheme as createTheme, colors, makeGradient } from '@akropolis-web/styles';

import {
  helveticaNeueBold,
  helveticaNeueBoldItalic,
  helveticaNeueCondensedBlack,
  helveticaNeueCondensedBold,
  helveticaNeueItalic,
  helveticaNeueLight,
  helveticaNeueLightItalic,
  helveticaNeueMedium,
  helveticaNeueMediumItalic,
  helveticaNeueThin,
  helveticaNeueThinItalic,
  helveticaNeueUltraLight,
  helveticaNeueUltraLightItalic,
  helveticaNeue,
} from './fonts';

export { Theme };

const defaultTheme = createMuiTheme();

function getGradients(type: 'dark' | 'light') {
  return {
    spartaIcon: makeGradient(
      type === 'dark'
        ? [colors.northWesternPurple, colors.darkPurple]
        : [colors.lilac, colors.iris],
    ),
    spartaText: makeGradient([colors.blueViolet, colors.lavenderBlue]),
    linearChart: [
      makeGradient(['#fc87e2', '#f24cb6']),
      makeGradient(['#63afdd', '#574cf2']),
      makeGradient(['#c43ff0', '#574cf2']),
    ] as const,
    poolCompositionChart: [
      makeGradient(['#63f8b3', '#dcff9c']),
      makeGradient(['#e323ff', '#7517f8']),
      makeGradient(['#639ff8', '#85f9e1']),
      makeGradient(['#7d40ff', '#02a4ff']),
      makeGradient(['#f985f5', '#f863dd']),
    ] as const,
    progressChart: makeGradient(['#7d40ff', '#02a4ff']),
  };
}

export const lightTheme = getTheme('light');
export const darkTheme = getTheme('dark');

function getTheme(type: 'light' | 'dark'): Theme {
  const tabsHeight = 36;
  const tabsIndicatorSpace = 3;
  const tabsBorderWidth = 1;

  return createTheme(type, {
    colors,
    gradients: getGradients(type),
    breakpoints: {
      keys: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'desktopXL',
        'desktopLG',
        'desktopMD',
        'desktopSM',
        'desktopXS',
        'tabletSM',
        'tabletXS',
        'mobileSM',
        'mobileXS',
      ],
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
        desktopXL: 2560,
        desktopLG: 1920,
        desktopMD: 1440,
        desktopSM: 1360,
        desktopXS: 1280,
        tabletSM: 1024,
        tabletXS: 768,
        mobileSM: 414,
        mobileXS: 0,
      },
    },
    typography: {
      fontFamily: ['Helvetica Neue', 'Arial', 'sans-serif'].join(','),
    },
    overrides: {
      MuiDrawer: {
        paper: {
          display: 'block',
          width: defaultTheme.spacing(60),
          padding: defaultTheme.spacing(4, 5),
          backgroundColor: type === 'dark' ? colors.blackCurrant : colors.white,
        },
      },
      MuiCssBaseline: {
        '@global': {
          '@font-face': [
            helveticaNeueBold,
            helveticaNeueBoldItalic,
            helveticaNeueCondensedBlack,
            helveticaNeueCondensedBold,
            helveticaNeueItalic,
            helveticaNeueLight,
            helveticaNeueLightItalic,
            helveticaNeueMedium,
            helveticaNeueMediumItalic,
            helveticaNeueThin,
            helveticaNeueThinItalic,
            helveticaNeueUltraLight,
            helveticaNeueUltraLightItalic,
            helveticaNeue,
          ],

          '#root': {
            zIndex: 1,
            position: 'relative',
          },
        },
      },

      MuiExpansionPanelSummary: {
        root: {
          '&$expanded': {
            minHeight: defaultTheme.spacing(6),
          },
        },

        content: {
          '&$expanded': {
            margin: defaultTheme.spacing(1.5, 0),
          },
        },
      },

      //TODO: remove Tabs overrides after importing Tabs from @akropolis-web/components
      MuiTabs: {
        root: {
          position: 'relative',
          display: 'inline-flex',
          overflow: 'hidden',
          minHeight: tabsHeight,
          borderRadius: tabsHeight / 2,
          padding: tabsIndicatorSpace,
          background: 'linear-gradient(to left, #544cf2, #d93cef)',

          '&::before': {
            content: "''",
            position: 'absolute',
            top: 1,
            left: 1,
            right: 1,
            bottom: 1,
            borderRadius: tabsHeight / 2,
            background: colors.foggyNight,
          },
        },

        indicator: {
          top: 0,
          bottom: 0,
          height: '100%',
          borderRadius: tabsHeight / 2 - tabsIndicatorSpace - tabsBorderWidth,
          zIndex: -1,
          background: 'linear-gradient(to left, #544cf2, #d93cef)',
        },

        scroller: {
          zIndex: 1,
          overflow: 'hidden',
          borderRadius: tabsHeight / 2 - tabsIndicatorSpace - tabsBorderWidth,
        },

        flexContainer: {
          height: '100%',
        },
      },

      MuiTab: {
        root: {
          position: 'relative',
          overflow: 'visible',
          minHeight: 'unset',
          padding: defaultTheme.spacing(0.2, 1.5),
          textTransform: 'unset',
          fontSize: '1rem',
          fontWeight: 300,
          lineHeight: 1.5,
          borderRadius: tabsHeight / 2 - tabsIndicatorSpace - tabsBorderWidth,

          '&::after': {
            content: "''",
            position: 'absolute',
            left: 0,
            width: 1,
            top: 3,
            bottom: 3,
            background: 'currentColor',
            opacity: 0,
            transition: defaultTheme.transitions.create('opacity'),
          },

          '&:not($selected)': {
            '& + &::after': {
              opacity: 0.2,
            },
          },

          '&$selected': {
            color: colors.white,
          },
        },
      },

      // TODO: enable @material-ui/lab overrides
      // @ts-ignore
      MuiTabPanel: {
        root: {
          padding: 0,
        },
      },
    },
  });
}

declare module '@material-ui/core/styles/createPalette' {
  interface TypeBackground {
    hint: string;
    tableHeader: string;
    paperSecondary: string;
  }
}

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    desktopXL: true;
    desktopLG: true;
    desktopMD: true;
    desktopSM: true;
    desktopXS: true;
    tabletSM: true;
    tabletXS: true;
    mobileSM: true;
    mobileXS: true;
  }
}
