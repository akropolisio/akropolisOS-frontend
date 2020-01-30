import BN from 'bn.js';

import { useApi } from 'services/api';
import { Token } from 'model/types';
import { formatBalance } from 'utils/format';

import { useSubscribable, ISubscriptionMeta } from './useSubscribable';

export function useFormattedBalance(
  token: Token,
  value: string | BN,
  isWei: boolean = true,
): [string, ISubscriptionMeta] {
  const api = useApi();
  const [tokenInfo, tokenInfoMeta] = useSubscribable(() => api.tokens.getTokenInfo$(token), [
    token,
  ]);

  return [
    (tokenInfo &&
      formatBalance({
        amountInBaseUnits: value,
        baseDecimals: isWei ? tokenInfo.decimals : 0,
        tokenSymbol: tokenInfo.symbol,
      })) ||
      '⏳',
    tokenInfoMeta,
  ];
}
