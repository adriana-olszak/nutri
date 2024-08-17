import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionnaireWhereInput } from './questionnaire-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyQuestionnaireArgs {

    @Field(() => QuestionnaireWhereInput, {nullable:true})
    @Type(() => QuestionnaireWhereInput)
    where?: QuestionnaireWhereInput;
}
