import { Field, InputType } from '@nestjs/graphql';
import { ComparisonOperator } from './comparison-operator.enum';

@InputType()
export class BaseFilterItem {
  @Field(() => String)
  property!: string;

  @Field(() => ComparisonOperator)
  operation!: ComparisonOperator;

  @Field(() => String)
  value!: string;

  @Field(() => Boolean, { nullable: true })
  caseSensitive?: boolean;

  @Field(() => Boolean, { nullable: true })
  includeEmpty?: boolean;
}

@InputType()
export class BaseFilter {
  @Field(() => BaseFilter, { nullable: true })
  NOT?: BaseFilter;

  @Field(() => [BaseFilter], { nullable: true })
  AND?: BaseFilter[];

  @Field(() => [BaseFilter], { nullable: true })
  OR?: BaseFilter[];

  @Field(() => BaseFilterItem, { nullable: true })
  filter?: BaseFilterItem;
}
