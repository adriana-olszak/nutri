import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireVersionCreateManyQuestionnaireInput } from './questionnaire-version-create-many-questionnaire.input';
import { Type } from 'class-transformer';

@InputType()
export class QuestionnaireVersionCreateManyQuestionnaireInputEnvelope {

    @Field(() => [QuestionnaireVersionCreateManyQuestionnaireInput], {nullable:false})
    @Type(() => QuestionnaireVersionCreateManyQuestionnaireInput)
    data!: Array<QuestionnaireVersionCreateManyQuestionnaireInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
