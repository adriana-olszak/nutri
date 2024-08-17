import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireScalarWhereInput } from './questionnaire-scalar-where.input';
import { Type } from 'class-transformer';
import { QuestionnaireUpdateManyMutationInput } from './questionnaire-update-many-mutation.input';

@InputType()
export class QuestionnaireUpdateManyWithWhereWithoutTenantInput {

    @Field(() => QuestionnaireScalarWhereInput, {nullable:false})
    @Type(() => QuestionnaireScalarWhereInput)
    where!: QuestionnaireScalarWhereInput;

    @Field(() => QuestionnaireUpdateManyMutationInput, {nullable:false})
    @Type(() => QuestionnaireUpdateManyMutationInput)
    data!: QuestionnaireUpdateManyMutationInput;
}
