import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireVersionWhereInput } from './questionnaire-version-where.input';

@InputType()
export class QuestionnaireVersionListRelationFilter {

    @Field(() => QuestionnaireVersionWhereInput, {nullable:true})
    every?: QuestionnaireVersionWhereInput;

    @Field(() => QuestionnaireVersionWhereInput, {nullable:true})
    some?: QuestionnaireVersionWhereInput;

    @Field(() => QuestionnaireVersionWhereInput, {nullable:true})
    none?: QuestionnaireVersionWhereInput;
}
