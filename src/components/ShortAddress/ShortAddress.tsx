import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import CopyToClipboard from 'react-copy-to-clipboard';

import { useStyles } from './ShortAddress.style';

function ShortAddress({ address }: { address: string }) {
  const classes = useStyles();

  const [tooltipTitle, setTooltipTitle] = useState('copy');

  const shortAddress = `${address.substr(0, 6)}...${address.substr(-4, 4)}`;

  const handleCopy = () => {
    setTooltipTitle('copied!');
  };

  const handleTooltipClose = () => {
    setTooltipTitle('copy');
  };

  return (
    <Tooltip
      className={classes.tooltip}
      title={tooltipTitle}
      onClose={handleTooltipClose}
      placement="bottom"
    >
      <CopyToClipboard text={address} onCopy={handleCopy}>
        <span>{shortAddress}</span>
      </CopyToClipboard>
    </Tooltip>
  );
}

export { ShortAddress };
