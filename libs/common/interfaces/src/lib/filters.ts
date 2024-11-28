
export interface IBaseFilterItem {
  property: string;
  operation: ComparisonOperator;
  value: string;
  caseSensitive?: boolean;
  includeEmpty?: boolean;
}

export interface IBaseFilter<T extends {} = {}> {
  NOT?: IBaseFilter<T>;
  AND?: IBaseFilter<T>[];
  OR?: IBaseFilter<T>[];
  filter?: IBaseFilterItem & T;
}

export enum ComparisonOperator {
  EQ = 'EQ',
  CONTAINS = 'CONTAINS',
  STARTS_WITH = 'STARTS_WITH',
  LTE = 'LTE',
  GTE = 'GTE',
  IN = 'IN',
  BETWEEN = 'BETWEEN',
  IS_NULL = 'IS_NULL',
  IS_EMPTY = 'IS_EMPTY',
  LT = 'LT',
  GT = 'GT',
  IS_NONE_OF = 'IS_NONE_OF',
  IS_NOT_EMPTY = 'IS_NOT_EMPTY',
  NOT_CONTAINS = 'NOT_CONTAINS'
}
