import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionWhereInput } from './submission-where.input';
import { Type } from 'class-transformer';
import { SubmissionUpdateWithoutAnswersInput } from './submission-update-without-answers.input';

@InputType()
export class SubmissionUpdateToOneWithWhereWithoutAnswersInput {

    @Field(() => SubmissionWhereInput, {nullable:true})
    @Type(() => SubmissionWhereInput)
    where?: SubmissionWhereInput;

    @Field(() => SubmissionUpdateWithoutAnswersInput, {nullable:false})
    @Type(() => SubmissionUpdateWithoutAnswersInput)
    data!: SubmissionUpdateWithoutAnswersInput;
}
