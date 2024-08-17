import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerCreateManySubmissionInput } from './answer-create-many-submission.input';
import { Type } from 'class-transformer';

@InputType()
export class AnswerCreateManySubmissionInputEnvelope {

    @Field(() => [AnswerCreateManySubmissionInput], {nullable:false})
    @Type(() => AnswerCreateManySubmissionInput)
    data!: Array<AnswerCreateManySubmissionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
