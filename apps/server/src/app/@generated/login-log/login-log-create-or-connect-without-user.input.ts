import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LoginLogWhereUniqueInput } from './login-log-where-unique.input';
import { Type } from 'class-transformer';
import { LoginLogCreateWithoutUserInput } from './login-log-create-without-user.input';

@InputType()
export class LoginLogCreateOrConnectWithoutUserInput {

    @Field(() => LoginLogWhereUniqueInput, {nullable:false})
    @Type(() => LoginLogWhereUniqueInput)
    where!: Prisma.AtLeast<LoginLogWhereUniqueInput, 'id'>;

    @Field(() => LoginLogCreateWithoutUserInput, {nullable:false})
    @Type(() => LoginLogCreateWithoutUserInput)
    create!: LoginLogCreateWithoutUserInput;
}
