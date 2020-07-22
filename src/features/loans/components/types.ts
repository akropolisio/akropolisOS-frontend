import { User, Debt } from 'generated/gql/pool';

export type PartialDebt = Pick<
  Debt,
  | 'total'
  | 'debt_id'
  | 'last_update'
  | 'status'
  | 'stakeProgress'
  | 'proposal_id'
  | 'repayed'
  | 'apr'
> & {
  borrower: Pick<User, 'id'>;
};

export type TableType = 'issued' | 'pending';
