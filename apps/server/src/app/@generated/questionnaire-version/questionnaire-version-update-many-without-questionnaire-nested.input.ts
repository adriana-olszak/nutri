import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireVersionCreateWithoutQuestionnaireInput } from './questionnaire-version-create-without-questionnaire.input';
import { Type } from 'class-transformer';
import { QuestionnaireVersionCreateOrConnectWithoutQuestionnaireInput } from './questionnaire-version-create-or-connect-without-questionnaire.input';
import { QuestionnaireVersionUpsertWithWhereUniqueWithoutQuestionnaireInput } from './questionnaire-version-upsert-with-where-unique-without-questionnaire.input';
import { QuestionnaireVersionCreateManyQuestionnaireInputEnvelope } from './questionnaire-version-create-many-questionnaire-input-envelope.input';
import { Prisma } from '@prisma/client';
import { QuestionnaireVersionWhereUniqueInput } from './questionnaire-version-where-unique.input';
import { QuestionnaireVersionUpdateWithWhereUniqueWithoutQuestionnaireInput } from './questionnaire-version-update-with-where-unique-without-questionnaire.input';
import { QuestionnaireVersionUpdateManyWithWhereWithoutQuestionnaireInput } from './questionnaire-version-update-many-with-where-without-questionnaire.input';
import { QuestionnaireVersionScalarWhereInput } from './questionnaire-version-scalar-where.input';

@InputType()
export class QuestionnaireVersionUpdateManyWithoutQuestionnaireNestedInput {

    @Field(() => [QuestionnaireVersionCreateWithoutQuestionnaireInput], {nullable:true})
    @Type(() => QuestionnaireVersionCreateWithoutQuestionnaireInput)
    create?: Array<QuestionnaireVersionCreateWithoutQuestionnaireInput>;

    @Field(() => [QuestionnaireVersionCreateOrConnectWithoutQuestionnaireInput], {nullable:true})
    @Type(() => QuestionnaireVersionCreateOrConnectWithoutQuestionnaireInput)
    connectOrCreate?: Array<QuestionnaireVersionCreateOrConnectWithoutQuestionnaireInput>;

    @Field(() => [QuestionnaireVersionUpsertWithWhereUniqueWithoutQuestionnaireInput], {nullable:true})
    @Type(() => QuestionnaireVersionUpsertWithWhereUniqueWithoutQuestionnaireInput)
    upsert?: Array<QuestionnaireVersionUpsertWithWhereUniqueWithoutQuestionnaireInput>;

    @Field(() => QuestionnaireVersionCreateManyQuestionnaireInputEnvelope, {nullable:true})
    @Type(() => QuestionnaireVersionCreateManyQuestionnaireInputEnvelope)
    createMany?: QuestionnaireVersionCreateManyQuestionnaireInputEnvelope;

    @Field(() => [QuestionnaireVersionWhereUniqueInput], {nullable:true})
    @Type(() => QuestionnaireVersionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<QuestionnaireVersionWhereUniqueInput, 'id' | 'questionnaireId_versionNumber'>>;

    @Field(() => [QuestionnaireVersionWhereUniqueInput], {nullable:true})
    @Type(() => QuestionnaireVersionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<QuestionnaireVersionWhereUniqueInput, 'id' | 'questionnaireId_versionNumber'>>;

    @Field(() => [QuestionnaireVersionWhereUniqueInput], {nullable:true})
    @Type(() => QuestionnaireVersionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<QuestionnaireVersionWhereUniqueInput, 'id' | 'questionnaireId_versionNumber'>>;

    @Field(() => [QuestionnaireVersionWhereUniqueInput], {nullable:true})
    @Type(() => QuestionnaireVersionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<QuestionnaireVersionWhereUniqueInput, 'id' | 'questionnaireId_versionNumber'>>;

    @Field(() => [QuestionnaireVersionUpdateWithWhereUniqueWithoutQuestionnaireInput], {nullable:true})
    @Type(() => QuestionnaireVersionUpdateWithWhereUniqueWithoutQuestionnaireInput)
    update?: Array<QuestionnaireVersionUpdateWithWhereUniqueWithoutQuestionnaireInput>;

    @Field(() => [QuestionnaireVersionUpdateManyWithWhereWithoutQuestionnaireInput], {nullable:true})
    @Type(() => QuestionnaireVersionUpdateManyWithWhereWithoutQuestionnaireInput)
    updateMany?: Array<QuestionnaireVersionUpdateManyWithWhereWithoutQuestionnaireInput>;

    @Field(() => [QuestionnaireVersionScalarWhereInput], {nullable:true})
    @Type(() => QuestionnaireVersionScalarWhereInput)
    deleteMany?: Array<QuestionnaireVersionScalarWhereInput>;
}
