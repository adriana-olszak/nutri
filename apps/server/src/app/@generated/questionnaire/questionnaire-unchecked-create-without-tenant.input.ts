import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireVersionUncheckedCreateNestedManyWithoutQuestionnaireInput } from '../questionnaire-version/questionnaire-version-unchecked-create-nested-many-without-questionnaire.input';
import { SubmissionUncheckedCreateNestedManyWithoutQuestionnaireInput } from '../submission/submission-unchecked-create-nested-many-without-questionnaire.input';

@InputType()
export class QuestionnaireUncheckedCreateWithoutTenantInput {

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

    @Field(() => QuestionnaireVersionUncheckedCreateNestedManyWithoutQuestionnaireInput, {nullable:true})
    versions?: QuestionnaireVersionUncheckedCreateNestedManyWithoutQuestionnaireInput;

    @Field(() => SubmissionUncheckedCreateNestedManyWithoutQuestionnaireInput, {nullable:true})
    submissions?: SubmissionUncheckedCreateNestedManyWithoutQuestionnaireInput;
}
