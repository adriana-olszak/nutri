import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MatchQuality } from './match-quality.enum';
import { NestedEnumMatchQualityFilter } from './nested-enum-match-quality-filter.input';

@InputType()
export class EnumMatchQualityFilter {

    @Field(() => MatchQuality, {nullable:true})
    equals?: keyof typeof MatchQuality;

    @Field(() => [MatchQuality], {nullable:true})
    in?: Array<keyof typeof MatchQuality>;

    @Field(() => [MatchQuality], {nullable:true})
    notIn?: Array<keyof typeof MatchQuality>;

    @Field(() => NestedEnumMatchQualityFilter, {nullable:true})
    not?: NestedEnumMatchQualityFilter;
}
