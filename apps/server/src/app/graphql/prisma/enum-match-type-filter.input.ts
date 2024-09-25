import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MatchType } from './match-type.enum';
import { NestedEnumMatchTypeFilter } from './nested-enum-match-type-filter.input';

@InputType()
export class EnumMatchTypeFilter {

    @Field(() => MatchType, {nullable:true})
    equals?: keyof typeof MatchType;

    @Field(() => [MatchType], {nullable:true})
    in?: Array<keyof typeof MatchType>;

    @Field(() => [MatchType], {nullable:true})
    notIn?: Array<keyof typeof MatchType>;

    @Field(() => NestedEnumMatchTypeFilter, {nullable:true})
    not?: NestedEnumMatchTypeFilter;
}
