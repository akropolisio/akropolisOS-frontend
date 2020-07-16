import * as React from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import Avatar from '@material-ui/core/Avatar';
import { GetProps } from '_helpers';

import { useApi } from 'services/api';
import { getShortAddress } from 'utils/format';
import { useSubscribable, useCommunication, useOnChangeState } from 'utils/react';
import { makeStyles } from 'utils/styles';
import { tKeys, useTranslate } from 'services/i18n';
import { Button, Loading, Typography, Grid } from 'components';

import { AuthModal } from './components/AuthModal';

type IProps = Pick<GetProps<typeof Button>, 'color'> & {};

export function AuthButton(props: IProps) {
  const { color } = props;
  const [isOpened, setIsOpened] = React.useState(false);
  const api = useApi();
  const classes = useStyles();
  const { t } = useTranslate();

  const [account, accountMeta] = useSubscribable(() => api.web3Manager.account, [], null);
  const [status] = useSubscribable(() => api.web3Manager.status, [], 'pending');
  const [connectedWallet] = useSubscribable(() => api.web3Manager.connectedWallet, [], null);

  const connectCommunication = useCommunication(api.web3Manager.connect, []);

  const toggleIsOpened = React.useCallback(() => setIsOpened(!isOpened), [isOpened]);

  const handleDisconnectClick = React.useCallback(() => {
    api.web3Manager.disconnect();
    connectCommunication.reset();
    setIsOpened(false);
  }, [connectCommunication.reset]);

  useOnChangeState(
    { isOpened, connectedWallet },
    (prev, cur) =>
      cur.isOpened && !!cur.connectedWallet && prev.connectedWallet !== cur.connectedWallet,
    () => setIsOpened(false),
  );

  return (
    <>
      <Button
        color={color}
        variant="outlined"
        onClick={toggleIsOpened}
        disabled={!accountMeta.loaded}
        className={classes.root}
        endIcon={
          <Loading
            ignoreError
            meta={{ loaded: status !== 'pending', error: null }}
            communication={connectCommunication}
            progressVariant="circle"
            progressProps={{
              size: 24,
            }}
          />
        }
      >
        <Loading meta={accountMeta}>
          {account ? (
            <>
              <Avatar>
                <Jazzicon diameter={40} seed={jsNumberForAddress(account)} />
              </Avatar>
              <Grid
                container
                alignItems="flex-start"
                direction="column"
                spacing={0}
                className={classes.container}
              >
                <Grid item>
                  <Typography className={classes.address}>{getShortAddress(account)}</Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.connected}>
                    {`${t(tKeys.features.auth.modalTitle.connectedTo.getKey())} ${connectedWallet}`}
                  </Typography>
                </Grid>
              </Grid>
            </>
          ) : (
            <Typography className={classes.connect}>
              {t(tKeys.features.auth.connect.getKey())}
            </Typography>
          )}
        </Loading>
      </Button>
      <AuthModal
        connectedWallet={connectedWallet}
        isOpened={isOpened}
        onClose={toggleIsOpened}
        account={account}
        connecting={connectCommunication}
        connect={connectCommunication.execute}
        disconnect={handleDisconnectClick}
      />
    </>
  );
}

const useStyles = makeStyles({
  root: {
    padding: '0 15px 0 0',
    borderRadius: 20,
  },
  address: {
    fontSize: 12,
    lineHeight: 1,
  },
  connected: {
    fontSize: 12,
    lineHeight: 1,
    opacity: 0.5,
  },
  connect: {
    paddingLeft: 10,
  },
  container: {
    marginLeft: 11,
  },
});
