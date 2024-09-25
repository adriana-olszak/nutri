import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MatchType } from './match-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMatchTypeFilter } from './nested-enum-match-type-filter.input';

@InputType()
export class NestedEnumMatchTypeWithAggregatesFilter {

    @Field(() => MatchType, {nullable:true})
    equals?: keyof typeof MatchType;

    @Field(() => [MatchType], {nullable:true})
    in?: Array<keyof typeof MatchType>;

    @Field(() => [MatchType], {nullable:true})
    notIn?: Array<keyof typeof MatchType>;

    @Field(() => NestedEnumMatchTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMatchTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumMatchTypeFilter, {nullable:true})
    _min?: NestedEnumMatchTypeFilter;

    @Field(() => NestedEnumMatchTypeFilter, {nullable:true})
    _max?: NestedEnumMatchTypeFilter;
}
