import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoginLogCreateWithoutUserInput } from './login-log-create-without-user.input';
import { Type } from 'class-transformer';
import { LoginLogCreateOrConnectWithoutUserInput } from './login-log-create-or-connect-without-user.input';
import { LoginLogCreateManyUserInputEnvelope } from './login-log-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LoginLogWhereUniqueInput } from './login-log-where-unique.input';

@InputType()
export class LoginLogCreateNestedManyWithoutUserInput {

    @Field(() => [LoginLogCreateWithoutUserInput], {nullable:true})
    @Type(() => LoginLogCreateWithoutUserInput)
    create?: Array<LoginLogCreateWithoutUserInput>;

    @Field(() => [LoginLogCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => LoginLogCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<LoginLogCreateOrConnectWithoutUserInput>;

    @Field(() => LoginLogCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => LoginLogCreateManyUserInputEnvelope)
    createMany?: LoginLogCreateManyUserInputEnvelope;

    @Field(() => [LoginLogWhereUniqueInput], {nullable:true})
    @Type(() => LoginLogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LoginLogWhereUniqueInput, 'id'>>;
}
