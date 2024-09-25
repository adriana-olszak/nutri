import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MatchQuality } from './match-quality.enum';

@InputType()
export class NestedEnumMatchQualityFilter {

    @Field(() => MatchQuality, {nullable:true})
    equals?: keyof typeof MatchQuality;

    @Field(() => [MatchQuality], {nullable:true})
    in?: Array<keyof typeof MatchQuality>;

    @Field(() => [MatchQuality], {nullable:true})
    notIn?: Array<keyof typeof MatchQuality>;

    @Field(() => NestedEnumMatchQualityFilter, {nullable:true})
    not?: NestedEnumMatchQualityFilter;
}
