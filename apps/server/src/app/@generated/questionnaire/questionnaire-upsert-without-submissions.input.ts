import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireUpdateWithoutSubmissionsInput } from './questionnaire-update-without-submissions.input';
import { Type } from 'class-transformer';
import { QuestionnaireCreateWithoutSubmissionsInput } from './questionnaire-create-without-submissions.input';
import { QuestionnaireWhereInput } from './questionnaire-where.input';

@InputType()
export class QuestionnaireUpsertWithoutSubmissionsInput {

    @Field(() => QuestionnaireUpdateWithoutSubmissionsInput, {nullable:false})
    @Type(() => QuestionnaireUpdateWithoutSubmissionsInput)
    update!: QuestionnaireUpdateWithoutSubmissionsInput;

    @Field(() => QuestionnaireCreateWithoutSubmissionsInput, {nullable:false})
    @Type(() => QuestionnaireCreateWithoutSubmissionsInput)
    create!: QuestionnaireCreateWithoutSubmissionsInput;

    @Field(() => QuestionnaireWhereInput, {nullable:true})
    @Type(() => QuestionnaireWhereInput)
    where?: QuestionnaireWhereInput;
}
