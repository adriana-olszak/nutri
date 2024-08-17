import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSubmissionsInput } from './user-create-without-submissions.input';

@InputType()
export class UserCreateOrConnectWithoutSubmissionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'googleId'>;

    @Field(() => UserCreateWithoutSubmissionsInput, {nullable:false})
    @Type(() => UserCreateWithoutSubmissionsInput)
    create!: UserCreateWithoutSubmissionsInput;
}
