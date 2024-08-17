import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionCreateManyQuestionnaireVersionInput } from './submission-create-many-questionnaire-version.input';
import { Type } from 'class-transformer';

@InputType()
export class SubmissionCreateManyQuestionnaireVersionInputEnvelope {

    @Field(() => [SubmissionCreateManyQuestionnaireVersionInput], {nullable:false})
    @Type(() => SubmissionCreateManyQuestionnaireVersionInput)
    data!: Array<SubmissionCreateManyQuestionnaireVersionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
