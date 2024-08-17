import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionnaireCreateInput } from './questionnaire-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneQuestionnaireArgs {

    @Field(() => QuestionnaireCreateInput, {nullable:false})
    @Type(() => QuestionnaireCreateInput)
    data!: QuestionnaireCreateInput;
}
