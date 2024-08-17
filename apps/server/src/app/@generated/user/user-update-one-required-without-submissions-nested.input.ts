import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSubmissionsInput } from './user-create-without-submissions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSubmissionsInput } from './user-create-or-connect-without-submissions.input';
import { UserUpsertWithoutSubmissionsInput } from './user-upsert-without-submissions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutSubmissionsInput } from './user-update-to-one-with-where-without-submissions.input';

@InputType()
export class UserUpdateOneRequiredWithoutSubmissionsNestedInput {

    @Field(() => UserCreateWithoutSubmissionsInput, {nullable:true})
    @Type(() => UserCreateWithoutSubmissionsInput)
    create?: UserCreateWithoutSubmissionsInput;

    @Field(() => UserCreateOrConnectWithoutSubmissionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSubmissionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput;

    @Field(() => UserUpsertWithoutSubmissionsInput, {nullable:true})
    @Type(() => UserUpsertWithoutSubmissionsInput)
    upsert?: UserUpsertWithoutSubmissionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'googleId'>;

    @Field(() => UserUpdateToOneWithWhereWithoutSubmissionsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutSubmissionsInput)
    update?: UserUpdateToOneWithWhereWithoutSubmissionsInput;
}
