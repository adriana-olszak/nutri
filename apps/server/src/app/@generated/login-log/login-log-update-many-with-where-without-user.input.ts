import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoginLogScalarWhereInput } from './login-log-scalar-where.input';
import { Type } from 'class-transformer';
import { LoginLogUpdateManyMutationInput } from './login-log-update-many-mutation.input';

@InputType()
export class LoginLogUpdateManyWithWhereWithoutUserInput {

    @Field(() => LoginLogScalarWhereInput, {nullable:false})
    @Type(() => LoginLogScalarWhereInput)
    where!: LoginLogScalarWhereInput;

    @Field(() => LoginLogUpdateManyMutationInput, {nullable:false})
    @Type(() => LoginLogUpdateManyMutationInput)
    data!: LoginLogUpdateManyMutationInput;
}
