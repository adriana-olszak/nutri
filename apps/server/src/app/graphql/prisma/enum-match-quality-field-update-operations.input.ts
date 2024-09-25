import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MatchQuality } from './match-quality.enum';

@InputType()
export class EnumMatchQualityFieldUpdateOperationsInput {

    @Field(() => MatchQuality, {nullable:true})
    set?: keyof typeof MatchQuality;
}
