import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoginLogCreateInput } from './login-log-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneLoginLogArgs {

    @Field(() => LoginLogCreateInput, {nullable:false})
    @Type(() => LoginLogCreateInput)
    data!: LoginLogCreateInput;
}
