import { Theme, makeStyles, lighten } from 'utils/styles';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '0.25rem',
      textAlign: 'center',
      transition: theme.transitions.create('background-color'),

      '&$isSmall': {
        padding: theme.spacing(0.5, 1.5),
        minHeight: theme.spacing(4),
      },

      '&$isMedium': {
        padding: theme.spacing(1.5, 3),
        minHeight: theme.spacing(6),
      },

      '&$colorDefault': {
        backgroundColor: theme.palette.background.hint,
      },

      '&$colorError': {
        color: theme.palette.error.main,
        backgroundColor: lighten(theme.palette.error.main, 0.8),
      },
    },

    isSmall: {},
    isMedium: {},

    colorDefault: {},
    colorError: {},
  };
});