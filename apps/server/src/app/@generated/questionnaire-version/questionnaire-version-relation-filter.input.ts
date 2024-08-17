import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireVersionWhereInput } from './questionnaire-version-where.input';

@InputType()
export class QuestionnaireVersionRelationFilter {

    @Field(() => QuestionnaireVersionWhereInput, {nullable:true})
    is?: QuestionnaireVersionWhereInput;

    @Field(() => QuestionnaireVersionWhereInput, {nullable:true})
    isNot?: QuestionnaireVersionWhereInput;
}
