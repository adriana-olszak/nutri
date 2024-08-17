import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionnaireVersionCreateInput } from './questionnaire-version-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneQuestionnaireVersionArgs {

    @Field(() => QuestionnaireVersionCreateInput, {nullable:false})
    @Type(() => QuestionnaireVersionCreateInput)
    data!: QuestionnaireVersionCreateInput;
}
