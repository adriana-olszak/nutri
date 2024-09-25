import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MatchStatus } from './match-status.enum';
import { NestedEnumMatchStatusFilter } from './nested-enum-match-status-filter.input';

@InputType()
export class EnumMatchStatusFilter {

    @Field(() => MatchStatus, {nullable:true})
    equals?: keyof typeof MatchStatus;

    @Field(() => [MatchStatus], {nullable:true})
    in?: Array<keyof typeof MatchStatus>;

    @Field(() => [MatchStatus], {nullable:true})
    notIn?: Array<keyof typeof MatchStatus>;

    @Field(() => NestedEnumMatchStatusFilter, {nullable:true})
    not?: NestedEnumMatchStatusFilter;
}
