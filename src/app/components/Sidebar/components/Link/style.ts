import { makeStyles } from 'utils/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginTop: '30px',
    color: theme.colors.white,
    textDecoration: 'none',
    fontSize: '16px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',

    '&:hover $inactiveIcon path': {
      opacity: 1,
    },

    '&:hover $label': {
      opacity: 0.75,
    },
  },

  icon: {},

  activeIcon: {
    display: 'none',
  },

  inactiveIcon: {},

  label: {
    opacity: 0.5,

    '$icon + &': {
      marginLeft: '12px',
    },
  },

  active: {
    '& $linkLabel': {
      opacity: 1,
    },

    '& $activeIcon': {
      display: 'block',
    },

    '& $inactiveIcon': {
      display: 'none',
    },
  },
}), { name: 'link' });
