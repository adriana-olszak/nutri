import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionUncheckedCreateNestedManyWithoutQuestionnaireInput } from '../submission/submission-unchecked-create-nested-many-without-questionnaire.input';

@InputType()
export class QuestionnaireUncheckedCreateWithoutVersionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    tenantId?: string;

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

    @Field(() => SubmissionUncheckedCreateNestedManyWithoutQuestionnaireInput, {nullable:true})
    submissions?: SubmissionUncheckedCreateNestedManyWithoutQuestionnaireInput;
}
