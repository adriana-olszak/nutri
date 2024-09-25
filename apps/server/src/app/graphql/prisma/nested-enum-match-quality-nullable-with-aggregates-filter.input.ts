import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MatchQuality } from './match-quality.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumMatchQualityNullableFilter } from './nested-enum-match-quality-nullable-filter.input';

@InputType()
export class NestedEnumMatchQualityNullableWithAggregatesFilter {

    @Field(() => MatchQuality, {nullable:true})
    equals?: keyof typeof MatchQuality;

    @Field(() => [MatchQuality], {nullable:true})
    in?: Array<keyof typeof MatchQuality>;

    @Field(() => [MatchQuality], {nullable:true})
    notIn?: Array<keyof typeof MatchQuality>;

    @Field(() => NestedEnumMatchQualityNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMatchQualityNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumMatchQualityNullableFilter, {nullable:true})
    _min?: NestedEnumMatchQualityNullableFilter;

    @Field(() => NestedEnumMatchQualityNullableFilter, {nullable:true})
    _max?: NestedEnumMatchQualityNullableFilter;
}
