import { Field, InputType } from '@nestjs/graphql';

import { ComparisonOperator, IBaseFilterItem, IBaseFilter } from '@nutri/common-interfaces';

import { registerEnumType } from '@nestjs/graphql';

registerEnumType(ComparisonOperator, {
  name: 'ComparisonOperator',
});


@InputType()
export class BaseFilterItem  implements  IBaseFilterItem {
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
export class BaseFilter  implements  IBaseFilter{
  @Field(() => BaseFilter, { nullable: true })
  NOT?: BaseFilter;

  @Field(() => [BaseFilter], { nullable: true })
  AND?: BaseFilter[];

  @Field(() => [BaseFilter], { nullable: true })
  OR?: BaseFilter[];

  @Field(() => BaseFilterItem, { nullable: true })
  filter?: BaseFilterItem;
}
