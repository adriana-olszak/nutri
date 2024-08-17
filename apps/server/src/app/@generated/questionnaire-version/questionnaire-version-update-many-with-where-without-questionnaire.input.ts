import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireVersionScalarWhereInput } from './questionnaire-version-scalar-where.input';
import { Type } from 'class-transformer';
import { QuestionnaireVersionUpdateManyMutationInput } from './questionnaire-version-update-many-mutation.input';

@InputType()
export class QuestionnaireVersionUpdateManyWithWhereWithoutQuestionnaireInput {

    @Field(() => QuestionnaireVersionScalarWhereInput, {nullable:false})
    @Type(() => QuestionnaireVersionScalarWhereInput)
    where!: QuestionnaireVersionScalarWhereInput;

    @Field(() => QuestionnaireVersionUpdateManyMutationInput, {nullable:false})
    @Type(() => QuestionnaireVersionUpdateManyMutationInput)
    data!: QuestionnaireVersionUpdateManyMutationInput;
}
