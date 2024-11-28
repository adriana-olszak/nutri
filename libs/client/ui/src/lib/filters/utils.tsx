import { match } from 'ts-pattern';
import { ComparisonOperator } from '@nutri/client-gql';
import { CheckCircle, ChevronLeft, ChevronRight, Equal } from 'lucide-react';


export const handleOperatorName = (
  operator: ComparisonOperator,
  type?: string,
) => {
  return match(operator)
    .with(ComparisonOperator.Between, () => 'between')
    .with(ComparisonOperator.Contains, () => 'contains')
    .with(ComparisonOperator.Eq, () => 'equals')
    .with(ComparisonOperator.Gt, () =>
      type === 'date' ? 'after' : 'more than',
    )
    .with(ComparisonOperator.Gte, () => 'greater than or equal to')
    .with(ComparisonOperator.In, () => 'in')
    .with(ComparisonOperator.IsEmpty, () => 'is empty')
    .with(ComparisonOperator.IsNull, () => 'is null')
    .with(ComparisonOperator.Lt, () =>
      type === 'date' ? 'before' : 'less than',
    )
    .with(ComparisonOperator.Lte, () => 'less than or equal to')
    .with(ComparisonOperator.StartsWith, () => 'starts with')
    .with(ComparisonOperator.IsNotEmpty, () => 'is not empty')
    .with(ComparisonOperator.NotContains, () => 'does not contain')
    .otherwise(() => 'unknown');
};

export const handleOperatorIcon = (
  operator: ComparisonOperator,
  type?: string,
) => {
  return match(operator)
    .with(ComparisonOperator.Between, () => <CheckCircle />)
    .with(ComparisonOperator.Contains, () => <CheckCircle />)
    .with(ComparisonOperator.Eq, () => <Equal />)
    .with(ComparisonOperator.Gt, () =>
      type === 'date' ? <ChevronRight /> : <ChevronRight />,
    )
    .with(ComparisonOperator.Gte, () => 'greater than or equal to')
    .with(ComparisonOperator.In, () => 'in')
    .with(ComparisonOperator.IsEmpty, () => <CheckCircle />)
    .with(ComparisonOperator.IsNull, () => 'is null')
    .with(ComparisonOperator.Lt, () =>
      type === 'date' ? <ChevronRight /> : <ChevronLeft />,
    )
    .with(ComparisonOperator.Lte, () => 'less than or equal to')
    .with(ComparisonOperator.StartsWith, () => 'starts with')
    .with(ComparisonOperator.IsNotEmpty, () => <CheckCircle />)
    .with(ComparisonOperator.NotContains, () => <CheckCircle />)
    .otherwise(() => 'unknown');
};
