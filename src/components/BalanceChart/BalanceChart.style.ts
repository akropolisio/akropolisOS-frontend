import { makeStyles, Theme, colors } from 'utils/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const graphicMarginBottom = theme.spacing(3);
  const switchButtonsHeight = 40;
  const graphicHeight = `calc(100% - ${graphicMarginBottom}px - ${switchButtonsHeight}px)`;

  return {
    root: {
      height: '100%',
    },

    graphic: {
      height: graphicHeight,
      marginBottom: graphicMarginBottom,
    },

    switchButton: {
      minWidth: 'unset',
      minHeight: 'unset',
      padding: '0.1875rem 0.6875rem',
      fontSize: '0.625rem',
    },

    tick: {
      fill: colors.frenchGray,
      fontSize: '0.625rem',
      fontWeight: 500,
      textTransform: 'uppercase',
    },
  };
});
