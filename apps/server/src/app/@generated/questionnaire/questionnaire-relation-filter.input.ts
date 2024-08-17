import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireWhereInput } from './questionnaire-where.input';

@InputType()
export class QuestionnaireRelationFilter {

    @Field(() => QuestionnaireWhereInput, {nullable:true})
    is?: QuestionnaireWhereInput;

    @Field(() => QuestionnaireWhereInput, {nullable:true})
    isNot?: QuestionnaireWhereInput;
}
