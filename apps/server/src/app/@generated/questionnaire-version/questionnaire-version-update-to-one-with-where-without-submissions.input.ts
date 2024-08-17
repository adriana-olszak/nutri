import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireVersionWhereInput } from './questionnaire-version-where.input';
import { Type } from 'class-transformer';
import { QuestionnaireVersionUpdateWithoutSubmissionsInput } from './questionnaire-version-update-without-submissions.input';

@InputType()
export class QuestionnaireVersionUpdateToOneWithWhereWithoutSubmissionsInput {

    @Field(() => QuestionnaireVersionWhereInput, {nullable:true})
    @Type(() => QuestionnaireVersionWhereInput)
    where?: QuestionnaireVersionWhereInput;

    @Field(() => QuestionnaireVersionUpdateWithoutSubmissionsInput, {nullable:false})
    @Type(() => QuestionnaireVersionUpdateWithoutSubmissionsInput)
    data!: QuestionnaireVersionUpdateWithoutSubmissionsInput;
}
