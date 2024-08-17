import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionUpdateWithoutAnswersInput } from './submission-update-without-answers.input';
import { Type } from 'class-transformer';
import { SubmissionCreateWithoutAnswersInput } from './submission-create-without-answers.input';
import { SubmissionWhereInput } from './submission-where.input';

@InputType()
export class SubmissionUpsertWithoutAnswersInput {

    @Field(() => SubmissionUpdateWithoutAnswersInput, {nullable:false})
    @Type(() => SubmissionUpdateWithoutAnswersInput)
    update!: SubmissionUpdateWithoutAnswersInput;

    @Field(() => SubmissionCreateWithoutAnswersInput, {nullable:false})
    @Type(() => SubmissionCreateWithoutAnswersInput)
    create!: SubmissionCreateWithoutAnswersInput;

    @Field(() => SubmissionWhereInput, {nullable:true})
    @Type(() => SubmissionWhereInput)
    where?: SubmissionWhereInput;
}
