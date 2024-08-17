import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionnaireUpdateManyMutationInput } from './questionnaire-update-many-mutation.input';
import { Type } from 'class-transformer';
import { QuestionnaireWhereInput } from './questionnaire-where.input';

@ArgsType()
export class UpdateManyQuestionnaireArgs {

    @Field(() => QuestionnaireUpdateManyMutationInput, {nullable:false})
    @Type(() => QuestionnaireUpdateManyMutationInput)
    data!: QuestionnaireUpdateManyMutationInput;

    @Field(() => QuestionnaireWhereInput, {nullable:true})
    @Type(() => QuestionnaireWhereInput)
    where?: QuestionnaireWhereInput;
}
