import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionnaireVersionUpdateManyMutationInput } from './questionnaire-version-update-many-mutation.input';
import { Type } from 'class-transformer';
import { QuestionnaireVersionWhereInput } from './questionnaire-version-where.input';

@ArgsType()
export class UpdateManyQuestionnaireVersionArgs {

    @Field(() => QuestionnaireVersionUpdateManyMutationInput, {nullable:false})
    @Type(() => QuestionnaireVersionUpdateManyMutationInput)
    data!: QuestionnaireVersionUpdateManyMutationInput;

    @Field(() => QuestionnaireVersionWhereInput, {nullable:true})
    @Type(() => QuestionnaireVersionWhereInput)
    where?: QuestionnaireVersionWhereInput;
}
