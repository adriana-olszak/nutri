import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MatchStatus } from './match-status.enum';
import { NestedEnumMatchStatusWithAggregatesFilter } from './nested-enum-match-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMatchStatusFilter } from './nested-enum-match-status-filter.input';

@InputType()
export class EnumMatchStatusWithAggregatesFilter {

    @Field(() => MatchStatus, {nullable:true})
    equals?: keyof typeof MatchStatus;

    @Field(() => [MatchStatus], {nullable:true})
    in?: Array<keyof typeof MatchStatus>;

    @Field(() => [MatchStatus], {nullable:true})
    notIn?: Array<keyof typeof MatchStatus>;

    @Field(() => NestedEnumMatchStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMatchStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumMatchStatusFilter, {nullable:true})
    _min?: NestedEnumMatchStatusFilter;

    @Field(() => NestedEnumMatchStatusFilter, {nullable:true})
    _max?: NestedEnumMatchStatusFilter;
}
