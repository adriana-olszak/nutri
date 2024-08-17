import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireVersionUpdateWithoutSubmissionsInput } from './questionnaire-version-update-without-submissions.input';
import { Type } from 'class-transformer';
import { QuestionnaireVersionCreateWithoutSubmissionsInput } from './questionnaire-version-create-without-submissions.input';
import { QuestionnaireVersionWhereInput } from './questionnaire-version-where.input';

@InputType()
export class QuestionnaireVersionUpsertWithoutSubmissionsInput {

    @Field(() => QuestionnaireVersionUpdateWithoutSubmissionsInput, {nullable:false})
    @Type(() => QuestionnaireVersionUpdateWithoutSubmissionsInput)
    update!: QuestionnaireVersionUpdateWithoutSubmissionsInput;

    @Field(() => QuestionnaireVersionCreateWithoutSubmissionsInput, {nullable:false})
    @Type(() => QuestionnaireVersionCreateWithoutSubmissionsInput)
    create!: QuestionnaireVersionCreateWithoutSubmissionsInput;

    @Field(() => QuestionnaireVersionWhereInput, {nullable:true})
    @Type(() => QuestionnaireVersionWhereInput)
    where?: QuestionnaireVersionWhereInput;
}
