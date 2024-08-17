import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireWhereInput } from './questionnaire-where.input';

@InputType()
export class QuestionnaireListRelationFilter {

    @Field(() => QuestionnaireWhereInput, {nullable:true})
    every?: QuestionnaireWhereInput;

    @Field(() => QuestionnaireWhereInput, {nullable:true})
    some?: QuestionnaireWhereInput;

    @Field(() => QuestionnaireWhereInput, {nullable:true})
    none?: QuestionnaireWhereInput;
}
