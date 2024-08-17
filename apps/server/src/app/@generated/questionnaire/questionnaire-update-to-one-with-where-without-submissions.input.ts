import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireWhereInput } from './questionnaire-where.input';
import { Type } from 'class-transformer';
import { QuestionnaireUpdateWithoutSubmissionsInput } from './questionnaire-update-without-submissions.input';

@InputType()
export class QuestionnaireUpdateToOneWithWhereWithoutSubmissionsInput {

    @Field(() => QuestionnaireWhereInput, {nullable:true})
    @Type(() => QuestionnaireWhereInput)
    where?: QuestionnaireWhereInput;

    @Field(() => QuestionnaireUpdateWithoutSubmissionsInput, {nullable:false})
    @Type(() => QuestionnaireUpdateWithoutSubmissionsInput)
    data!: QuestionnaireUpdateWithoutSubmissionsInput;
}
