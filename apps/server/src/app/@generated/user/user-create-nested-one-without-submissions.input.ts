import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSubmissionsInput } from './user-create-without-submissions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSubmissionsInput } from './user-create-or-connect-without-submissions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutSubmissionsInput {

    @Field(() => UserCreateWithoutSubmissionsInput, {nullable:true})
    @Type(() => UserCreateWithoutSubmissionsInput)
    create?: UserCreateWithoutSubmissionsInput;

    @Field(() => UserCreateOrConnectWithoutSubmissionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSubmissionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'googleId'>;
}
