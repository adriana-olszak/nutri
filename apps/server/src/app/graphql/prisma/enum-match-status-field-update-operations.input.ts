import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MatchStatus } from './match-status.enum';

@InputType()
export class EnumMatchStatusFieldUpdateOperationsInput {

    @Field(() => MatchStatus, {nullable:true})
    set?: keyof typeof MatchStatus;
}
