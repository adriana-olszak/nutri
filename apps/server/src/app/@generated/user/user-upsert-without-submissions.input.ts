import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSubmissionsInput } from './user-update-without-submissions.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSubmissionsInput } from './user-create-without-submissions.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutSubmissionsInput {

    @Field(() => UserUpdateWithoutSubmissionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutSubmissionsInput)
    update!: UserUpdateWithoutSubmissionsInput;

    @Field(() => UserCreateWithoutSubmissionsInput, {nullable:false})
    @Type(() => UserCreateWithoutSubmissionsInput)
    create!: UserCreateWithoutSubmissionsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
