import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { QuestionnaireCreateInput } from '../inputs/questionnaire-create.input';

@ArgsType()
export class CreateOneQuestionnaireArgs {

    @Field(() => QuestionnaireCreateInput, {nullable:false})
    @Type(() => QuestionnaireCreateInput)
    data!: QuestionnaireCreateInput;
}
