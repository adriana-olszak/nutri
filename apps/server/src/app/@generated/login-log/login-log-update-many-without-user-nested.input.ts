import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoginLogCreateWithoutUserInput } from './login-log-create-without-user.input';
import { Type } from 'class-transformer';
import { LoginLogCreateOrConnectWithoutUserInput } from './login-log-create-or-connect-without-user.input';
import { LoginLogUpsertWithWhereUniqueWithoutUserInput } from './login-log-upsert-with-where-unique-without-user.input';
import { LoginLogCreateManyUserInputEnvelope } from './login-log-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LoginLogWhereUniqueInput } from './login-log-where-unique.input';
import { LoginLogUpdateWithWhereUniqueWithoutUserInput } from './login-log-update-with-where-unique-without-user.input';
import { LoginLogUpdateManyWithWhereWithoutUserInput } from './login-log-update-many-with-where-without-user.input';
import { LoginLogScalarWhereInput } from './login-log-scalar-where.input';

@InputType()
export class LoginLogUpdateManyWithoutUserNestedInput {

    @Field(() => [LoginLogCreateWithoutUserInput], {nullable:true})
    @Type(() => LoginLogCreateWithoutUserInput)
    create?: Array<LoginLogCreateWithoutUserInput>;

    @Field(() => [LoginLogCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => LoginLogCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<LoginLogCreateOrConnectWithoutUserInput>;

    @Field(() => [LoginLogUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => LoginLogUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<LoginLogUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => LoginLogCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => LoginLogCreateManyUserInputEnvelope)
    createMany?: LoginLogCreateManyUserInputEnvelope;

    @Field(() => [LoginLogWhereUniqueInput], {nullable:true})
    @Type(() => LoginLogWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LoginLogWhereUniqueInput, 'id'>>;

    @Field(() => [LoginLogWhereUniqueInput], {nullable:true})
    @Type(() => LoginLogWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LoginLogWhereUniqueInput, 'id'>>;

    @Field(() => [LoginLogWhereUniqueInput], {nullable:true})
    @Type(() => LoginLogWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LoginLogWhereUniqueInput, 'id'>>;

    @Field(() => [LoginLogWhereUniqueInput], {nullable:true})
    @Type(() => LoginLogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LoginLogWhereUniqueInput, 'id'>>;

    @Field(() => [LoginLogUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => LoginLogUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<LoginLogUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [LoginLogUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => LoginLogUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<LoginLogUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [LoginLogScalarWhereInput], {nullable:true})
    @Type(() => LoginLogScalarWhereInput)
    deleteMany?: Array<LoginLogScalarWhereInput>;
}
