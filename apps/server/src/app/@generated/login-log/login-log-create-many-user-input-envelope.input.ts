import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoginLogCreateManyUserInput } from './login-log-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class LoginLogCreateManyUserInputEnvelope {

    @Field(() => [LoginLogCreateManyUserInput], {nullable:false})
    @Type(() => LoginLogCreateManyUserInput)
    data!: Array<LoginLogCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
