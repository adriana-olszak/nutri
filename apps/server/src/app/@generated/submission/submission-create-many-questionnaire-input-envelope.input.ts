import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionCreateManyQuestionnaireInput } from './submission-create-many-questionnaire.input';
import { Type } from 'class-transformer';

@InputType()
export class SubmissionCreateManyQuestionnaireInputEnvelope {

    @Field(() => [SubmissionCreateManyQuestionnaireInput], {nullable:false})
    @Type(() => SubmissionCreateManyQuestionnaireInput)
    data!: Array<SubmissionCreateManyQuestionnaireInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
