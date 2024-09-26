import { ComparisonOperator } from './comparison-operator.enum';

export enum PropertyType {
  String = 'String',
  Number = 'Number',
  Boolean = 'Boolean',
  Date = 'Date',
  Enum = 'Enum'
}

type OperatorSet = Set<ComparisonOperator>;

const STRING_OPERATORS: OperatorSet = new Set([
  ComparisonOperator.EQ,
  ComparisonOperator.CONTAINS,
  ComparisonOperator.STARTS_WITH,
  ComparisonOperator.NOT_CONTAINS,
]);

const NUMBER_OPERATORS: OperatorSet = new Set([
  ComparisonOperator.EQ,
  ComparisonOperator.LT,
  ComparisonOperator.LTE,
  ComparisonOperator.GT,
  ComparisonOperator.GTE,
  ComparisonOperator.BETWEEN,
]);

const BOOLEAN_OPERATORS: OperatorSet = new Set([ComparisonOperator.EQ]);

const DATE_OPERATORS: OperatorSet = new Set([
  ComparisonOperator.EQ,
  ComparisonOperator.LT,
  ComparisonOperator.LTE,
  ComparisonOperator.GT,
  ComparisonOperator.GTE,
  ComparisonOperator.BETWEEN,
]);

const ENUM_OPERATORS: OperatorSet = new Set([
  ComparisonOperator.EQ,
  ComparisonOperator.IN,
  ComparisonOperator.IS_NONE_OF,
]);

export const OPERATORS_BY_TYPE: Record<PropertyType, OperatorSet> = {
  [PropertyType.String]: STRING_OPERATORS,
  [PropertyType.Number]: NUMBER_OPERATORS,
  [PropertyType.Boolean]: BOOLEAN_OPERATORS,
  [PropertyType.Date]: DATE_OPERATORS,
  [PropertyType.Enum]: ENUM_OPERATORS,
};

export type PropertyMetadata = {
  type: PropertyType;
  enumType?: any; // For Enum types, specify the enum
};

export type FilterPropertyMetadata<T extends string> = {
  [K in T]: PropertyMetadata;
};

export type FilterableProperty = {
  name: string;
  type: string;
  operators: ComparisonOperator[];
};
