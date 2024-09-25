import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MatchQuality } from './match-quality.enum';

@InputType()
export class NestedEnumMatchQualityNullableFilter {

    @Field(() => MatchQuality, {nullable:true})
    equals?: keyof typeof MatchQuality;

    @Field(() => [MatchQuality], {nullable:true})
    in?: Array<keyof typeof MatchQuality>;

    @Field(() => [MatchQuality], {nullable:true})
    notIn?: Array<keyof typeof MatchQuality>;

    @Field(() => NestedEnumMatchQualityNullableFilter, {nullable:true})
    not?: NestedEnumMatchQualityNullableFilter;
}
