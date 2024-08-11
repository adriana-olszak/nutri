import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionCreateManyUserInput } from './session-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class SessionCreateManyUserInputEnvelope {

    @Field(() => [SessionCreateManyUserInput], {nullable:false})
    @Type(() => SessionCreateManyUserInput)
    data!: Array<SessionCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
