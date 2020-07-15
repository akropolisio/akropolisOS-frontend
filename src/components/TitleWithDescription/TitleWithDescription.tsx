import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import { InfoIconV2 } from 'components/icons';
import { makeStyles } from 'utils/styles';

type Props = {
  title: string;
  description: string;
  titleSize: 'medium' | 'big';
  iconBeforeTitle?: JSX.Element;
};

export function TitleWithDescription(props: Props) {
  const { title, description, iconBeforeTitle } = props;
  const classes = useStyles(props);

  return (
    <Typography variant="h6" component="h6" className={classes.title}>
      {iconBeforeTitle && <>{iconBeforeTitle}&nbsp;</>}
      {title}&nbsp;
      <Tooltip title={description} placement="right">
        <span>
          <InfoIconV2 fontSize="small" />
        </span>
      </Tooltip>
    </Typography>
  );
}

TitleWithDescription.defaultProps = {
  titleSize: 'medium',
} as Partial<Props>;

const useStyles = makeStyles(
  () => ({
    title: {
      marginBottom: 13,
      display: 'flex',
      alignItems: 'center',
      lineHeight: 'normal',
      fontSize: ({ titleSize }: Props) => (titleSize === 'big' ? 22 : 16),
      fontWeight: ({ titleSize }: Props) => (titleSize === 'big' ? 300 : 400),
    },
    content: {
      marginBottom: 8,
    },
    infoIcon: {},
  }),
  { name: 'TitleWithDescription' },
);