import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';

export function WalletConnect(props: GetProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 300 185">
      <path
        d="M61.4 36.3a127.1 127.1 0 0 1 177.2 0l5.8 5.7a6 6 0 0 1 0 8.7l-20 19.7a3.2 3.2 0 0 1-4.5 0l-8.1-8a88.7 88.7 0 0 0-123.6 0L79.5 71a3.2 3.2 0 0 1-4.4 0L55 51.3a6 6 0 0 1 0-8.7l6.4-6.3zM280.2 77l18 17.6a6 6 0 0 1 0 8.6l-80.9 79.2a6.4 6.4 0 0 1-8.8 0L151 126.2c-.6-.6-1.6-.6-2.2 0l-57.4 56.2a6.4 6.4 0 0 1-8.8 0L1.9 103.2a6 6 0 0 1 0-8.6L19.8 77a6.4 6.4 0 0 1 8.8 0L86 133.2a1.6 1.6 0 0 0 2.2 0L145.6 77a6.4 6.4 0 0 1 8.8 0l57.4 56.2c.6.6 1.6.6 2.2 0L271.4 77a6.4 6.4 0 0 1 8.8 0z"
        fill="#3B99FC"
        fillRule="nonzero"
      />
    </SvgIcon>
  );
}
