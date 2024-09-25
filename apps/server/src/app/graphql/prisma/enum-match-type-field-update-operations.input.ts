import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MatchType } from './match-type.enum';

@InputType()
export class EnumMatchTypeFieldUpdateOperationsInput {

    @Field(() => MatchType, {nullable:true})
    set?: keyof typeof MatchType;
}
