import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutSubmissionsInput } from './user-update-without-submissions.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutSubmissionsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutSubmissionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutSubmissionsInput)
    data!: UserUpdateWithoutSubmissionsInput;
}
