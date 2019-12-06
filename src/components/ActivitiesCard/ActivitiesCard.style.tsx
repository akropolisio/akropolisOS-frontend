import { makeStyles, Theme, colors } from 'utils/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: '0.25rem',
    backgroundColor: colors.white,
    boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.1)',
  },

  mainInformation: {
    padding: theme.spacing(2),
  },

  voting: {
    borderLeft: `solid ${colors.athensGray} 1px`,
    padding: theme.spacing(2),
  },

  toggleExpandIcon: {
    marginRight: theme.spacing(1),
    color: colors.royalPurple,
    cursor: 'pointer',
  },

  expansionPanel: {
    boxShadow: 'none',
  },

  expansionPanelSummary: {
    minWidth: 0,
    flexWrap: 'nowrap',
    padding: 0,
  },

  ellipsisRow: {
    maxWidth: theme.spacing(80),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  detailsShortText: {
    color: colors.topaz,
  },

  showButtonText: {
    color: colors.royalPurple,
  },

  votingForIcon: {
    marginRight: theme.spacing(1),
    composes: '$votingIcon',
    color: colors.shamrock,
  },

  votingAgainstIcon: {
    marginRight: theme.spacing(1),
    composes: '$votingIcon',
    color: colors.geraldine,
  },
}));
