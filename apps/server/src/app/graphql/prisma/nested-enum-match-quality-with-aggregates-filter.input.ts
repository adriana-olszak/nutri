import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MatchQuality } from './match-quality.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMatchQualityFilter } from './nested-enum-match-quality-filter.input';

@InputType()
export class NestedEnumMatchQualityWithAggregatesFilter {

    @Field(() => MatchQuality, {nullable:true})
    equals?: keyof typeof MatchQuality;

    @Field(() => [MatchQuality], {nullable:true})
    in?: Array<keyof typeof MatchQuality>;

    @Field(() => [MatchQuality], {nullable:true})
    notIn?: Array<keyof typeof MatchQuality>;

    @Field(() => NestedEnumMatchQualityWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMatchQualityWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumMatchQualityFilter, {nullable:true})
    _min?: NestedEnumMatchQualityFilter;

    @Field(() => NestedEnumMatchQualityFilter, {nullable:true})
    _max?: NestedEnumMatchQualityFilter;
}
