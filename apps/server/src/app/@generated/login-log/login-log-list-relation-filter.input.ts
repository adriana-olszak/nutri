import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoginLogWhereInput } from './login-log-where.input';

@InputType()
export class LoginLogListRelationFilter {

    @Field(() => LoginLogWhereInput, {nullable:true})
    every?: LoginLogWhereInput;

    @Field(() => LoginLogWhereInput, {nullable:true})
    some?: LoginLogWhereInput;

    @Field(() => LoginLogWhereInput, {nullable:true})
    none?: LoginLogWhereInput;
}
