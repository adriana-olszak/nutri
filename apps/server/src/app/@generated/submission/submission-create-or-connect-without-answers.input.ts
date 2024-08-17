import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';
import { Type } from 'class-transformer';
import { SubmissionCreateWithoutAnswersInput } from './submission-create-without-answers.input';

@InputType()
export class SubmissionCreateOrConnectWithoutAnswersInput {

    @Field(() => SubmissionWhereUniqueInput, {nullable:false})
    @Type(() => SubmissionWhereUniqueInput)
    where!: Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>;

    @Field(() => SubmissionCreateWithoutAnswersInput, {nullable:false})
    @Type(() => SubmissionCreateWithoutAnswersInput)
    create!: SubmissionCreateWithoutAnswersInput;
}
