import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireWhereInput } from './questionnaire-where.input';
import { Type } from 'class-transformer';
import { QuestionnaireUpdateWithoutVersionsInput } from './questionnaire-update-without-versions.input';

@InputType()
export class QuestionnaireUpdateToOneWithWhereWithoutVersionsInput {

    @Field(() => QuestionnaireWhereInput, {nullable:true})
    @Type(() => QuestionnaireWhereInput)
    where?: QuestionnaireWhereInput;

    @Field(() => QuestionnaireUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => QuestionnaireUpdateWithoutVersionsInput)
    data!: QuestionnaireUpdateWithoutVersionsInput;
}
