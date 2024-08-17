import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';
import { Type } from 'class-transformer';
import { SubmissionCreateWithoutUserInput } from './submission-create-without-user.input';

@InputType()
export class SubmissionCreateOrConnectWithoutUserInput {

    @Field(() => SubmissionWhereUniqueInput, {nullable:false})
    @Type(() => SubmissionWhereUniqueInput)
    where!: Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>;

    @Field(() => SubmissionCreateWithoutUserInput, {nullable:false})
    @Type(() => SubmissionCreateWithoutUserInput)
    create!: SubmissionCreateWithoutUserInput;
}
