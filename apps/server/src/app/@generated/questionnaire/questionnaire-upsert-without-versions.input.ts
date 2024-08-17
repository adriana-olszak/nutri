import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireUpdateWithoutVersionsInput } from './questionnaire-update-without-versions.input';
import { Type } from 'class-transformer';
import { QuestionnaireCreateWithoutVersionsInput } from './questionnaire-create-without-versions.input';
import { QuestionnaireWhereInput } from './questionnaire-where.input';

@InputType()
export class QuestionnaireUpsertWithoutVersionsInput {

    @Field(() => QuestionnaireUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => QuestionnaireUpdateWithoutVersionsInput)
    update!: QuestionnaireUpdateWithoutVersionsInput;

    @Field(() => QuestionnaireCreateWithoutVersionsInput, {nullable:false})
    @Type(() => QuestionnaireCreateWithoutVersionsInput)
    create!: QuestionnaireCreateWithoutVersionsInput;

    @Field(() => QuestionnaireWhereInput, {nullable:true})
    @Type(() => QuestionnaireWhereInput)
    where?: QuestionnaireWhereInput;
}
