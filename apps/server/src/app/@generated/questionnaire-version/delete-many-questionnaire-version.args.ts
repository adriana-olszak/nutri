import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionnaireVersionWhereInput } from './questionnaire-version-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyQuestionnaireVersionArgs {

    @Field(() => QuestionnaireVersionWhereInput, {nullable:true})
    @Type(() => QuestionnaireVersionWhereInput)
    where?: QuestionnaireVersionWhereInput;
}
