import { Field, GqlTypeReference, InputType, registerEnumType } from '@nestjs/graphql';
import { BaseFilter, BaseFilterItem } from './base-filter.type';
import { ComparisonOperator } from './comparison-operator.enum';

export function FilterInput<T extends string>(
  filterPropertyEnum: GqlTypeReference,
  typeName: string,
) {
  @InputType(`${typeName}FilterItem`)
  abstract class FilterItem extends BaseFilterItem {
    @Field(() => filterPropertyEnum)
    property!: T;

    @Field(() => ComparisonOperator)
    operation!: ComparisonOperator;

    @Field(() => String, { description: 'The value to filter by. Type depends on the property.' })
    value!: string;
  }

  @InputType(`${typeName}FilterInputAbstract`, { isAbstract: true })
  abstract class FilterInput extends BaseFilter {
    @Field(() => FilterInput, { nullable: true })
    NOT?: FilterInput;

    @Field(() => [FilterInput], { nullable: true })
    AND?: FilterInput[];

    @Field(() => [FilterInput], { nullable: true })
    OR?: FilterInput[];

    @Field(() => FilterItem, { nullable: true })
    filter?: FilterItem;
  }

  registerEnumType(filterPropertyEnum as object, {
    name: `${typeName}FilterItemPropertyType`,
  });


  return FilterInput;
}

