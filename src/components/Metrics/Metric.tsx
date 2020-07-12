import * as React from 'react';
import Typography from '@material-ui/core/Typography';

import { InfoIcon } from 'components/icons/InfoIcon2';
import { Grid, Tooltip } from 'components';
import { makeStyles, useTheme, colors } from 'utils/styles';

type Props = {
  title: string;
  titleDescription: string;
  content: JSX.Element;
  iconBeforeTitle?: JSX.Element;
  button?: JSX.Element;
  additionalInfo?: JSX.Element;
};

export function Metric(props: Props) {
  const { title, titleDescription, content, button, additionalInfo, iconBeforeTitle } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="column" justify="space-between" className={classes.root}>
      <Grid item xs>
        <Typography variant="h6" component="h6" className={classes.title}>
          {iconBeforeTitle && <>{iconBeforeTitle}&nbsp;</>}
          {title}
          <Tooltip title={titleDescription} placement="right">
            <span>
              <InfoIcon
                className={classes.infoIcon}
                backgroundColor={theme.palette.type === 'dark' ? colors.white : colors.gray}
              />
            </span>
          </Tooltip>
        </Typography>
        {content && <Grid className={classes.content}>{content}</Grid>}
        {additionalInfo}
      </Grid>
      <Grid item xs>
        {button}
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(
  () => ({
    root: {
      height: '100%',
    },
    title: {
      marginBottom: 13,
      display: 'flex',
      alignContent: 'center',
      lineHeight: 'normal',
    },
    infoIcon: {
      height: 15,
    },
    content: {
      marginBottom: 8,
    },
  }),
  { name: 'Metric' },
);