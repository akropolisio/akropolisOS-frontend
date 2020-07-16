import { Token, TokenAmount, LiquidityAmount, Currency, PercentAmount } from 'model/entities';
import { Fraction } from 'model/entities/Fraction';

export const zeroAddress = '0x0000000000000000000000000000000000000000';

export const tokenAmount = new TokenAmount(
  '2123123123123123123123',
  new Token(zeroAddress, 'MOCK', 18),
);

export const liquidityAmount = new LiquidityAmount('1123123123123123123123', new Currency('$', 18));

export const percentAmount = new PercentAmount(new Fraction('15555', '100000'));
