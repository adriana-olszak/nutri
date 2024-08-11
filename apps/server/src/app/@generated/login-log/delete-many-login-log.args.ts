import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoginLogWhereInput } from './login-log-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyLoginLogArgs {

    @Field(() => LoginLogWhereInput, {nullable:true})
    @Type(() => LoginLogWhereInput)
    where?: LoginLogWhereInput;
}
