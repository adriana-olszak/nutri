import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantCreateNestedOneWithoutQuestionnairesInput } from '../tenant/tenant-create-nested-one-without-questionnaires.input';
import { QuestionnaireVersionCreateNestedManyWithoutQuestionnaireInput } from '../questionnaire-version/questionnaire-version-create-nested-many-without-questionnaire.input';
import { SubmissionCreateNestedManyWithoutQuestionnaireInput } from '../submission/submission-create-nested-many-without-questionnaire.input';

@InputType()
export class QuestionnaireCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TenantCreateNestedOneWithoutQuestionnairesInput, {nullable:true})
    tenant?: TenantCreateNestedOneWithoutQuestionnairesInput;

    @Field(() => QuestionnaireVersionCreateNestedManyWithoutQuestionnaireInput, {nullable:true})
    versions?: QuestionnaireVersionCreateNestedManyWithoutQuestionnaireInput;

    @Field(() => SubmissionCreateNestedManyWithoutQuestionnaireInput, {nullable:true})
    submissions?: SubmissionCreateNestedManyWithoutQuestionnaireInput;
}
