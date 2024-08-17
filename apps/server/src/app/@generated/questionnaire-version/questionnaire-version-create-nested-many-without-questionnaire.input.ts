import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireVersionCreateWithoutQuestionnaireInput } from './questionnaire-version-create-without-questionnaire.input';
import { Type } from 'class-transformer';
import { QuestionnaireVersionCreateOrConnectWithoutQuestionnaireInput } from './questionnaire-version-create-or-connect-without-questionnaire.input';
import { QuestionnaireVersionCreateManyQuestionnaireInputEnvelope } from './questionnaire-version-create-many-questionnaire-input-envelope.input';
import { Prisma } from '@prisma/client';
import { QuestionnaireVersionWhereUniqueInput } from './questionnaire-version-where-unique.input';

@InputType()
export class QuestionnaireVersionCreateNestedManyWithoutQuestionnaireInput {

    @Field(() => [QuestionnaireVersionCreateWithoutQuestionnaireInput], {nullable:true})
    @Type(() => QuestionnaireVersionCreateWithoutQuestionnaireInput)
    create?: Array<QuestionnaireVersionCreateWithoutQuestionnaireInput>;

    @Field(() => [QuestionnaireVersionCreateOrConnectWithoutQuestionnaireInput], {nullable:true})
    @Type(() => QuestionnaireVersionCreateOrConnectWithoutQuestionnaireInput)
    connectOrCreate?: Array<QuestionnaireVersionCreateOrConnectWithoutQuestionnaireInput>;

    @Field(() => QuestionnaireVersionCreateManyQuestionnaireInputEnvelope, {nullable:true})
    @Type(() => QuestionnaireVersionCreateManyQuestionnaireInputEnvelope)
    createMany?: QuestionnaireVersionCreateManyQuestionnaireInputEnvelope;

    @Field(() => [QuestionnaireVersionWhereUniqueInput], {nullable:true})
    @Type(() => QuestionnaireVersionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<QuestionnaireVersionWhereUniqueInput, 'id' | 'questionnaireId_versionNumber'>>;
}
