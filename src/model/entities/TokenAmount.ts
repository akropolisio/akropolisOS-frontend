import BN from 'bn.js';

import { formatBalance } from 'utils/format';

import { Token } from './Token';
import { Amount } from './Amount';

const uniqType = Symbol('TokenAmount');

export class TokenAmount extends Amount<Token> {
  public _type: typeof uniqType = uniqType;

  // eslint-disable-next-line class-methods-use-this
  public makeAmount(amount: string | BN, token: Token): this {
    return new TokenAmount(amount, token) as this;
  }

  public toFormattedString(precision: number = 2): string {
    return formatBalance({
      amountInBaseUnits: this.value,
      tokenSymbol: this.currency.symbol,
      baseDecimals: this.currency.decimals,
      precision,
      symbolPosition: 'end-space',
    });
  }

  public withToken(newToken: Token): TokenAmount {
    return new TokenAmount(this.value, newToken);
  }
}
