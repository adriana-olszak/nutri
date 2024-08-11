import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LoginLogWhereUniqueInput } from './login-log-where-unique.input';
import { Type } from 'class-transformer';
import { LoginLogUpdateWithoutUserInput } from './login-log-update-without-user.input';
import { LoginLogCreateWithoutUserInput } from './login-log-create-without-user.input';

@InputType()
export class LoginLogUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => LoginLogWhereUniqueInput, {nullable:false})
    @Type(() => LoginLogWhereUniqueInput)
    where!: Prisma.AtLeast<LoginLogWhereUniqueInput, 'id'>;

    @Field(() => LoginLogUpdateWithoutUserInput, {nullable:false})
    @Type(() => LoginLogUpdateWithoutUserInput)
    update!: LoginLogUpdateWithoutUserInput;

    @Field(() => LoginLogCreateWithoutUserInput, {nullable:false})
    @Type(() => LoginLogCreateWithoutUserInput)
    create!: LoginLogCreateWithoutUserInput;
}
