import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionCreateWithoutQuestionnaireVersionInput } from './section-create-without-questionnaire-version.input';
import { Type } from 'class-transformer';
import { SectionCreateOrConnectWithoutQuestionnaireVersionInput } from './section-create-or-connect-without-questionnaire-version.input';
import { SectionCreateManyQuestionnaireVersionInputEnvelope } from './section-create-many-questionnaire-version-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SectionWhereUniqueInput } from './section-where-unique.input';

@InputType()
export class SectionUncheckedCreateNestedManyWithoutQuestionnaireVersionInput {

    @Field(() => [SectionCreateWithoutQuestionnaireVersionInput], {nullable:true})
    @Type(() => SectionCreateWithoutQuestionnaireVersionInput)
    create?: Array<SectionCreateWithoutQuestionnaireVersionInput>;

    @Field(() => [SectionCreateOrConnectWithoutQuestionnaireVersionInput], {nullable:true})
    @Type(() => SectionCreateOrConnectWithoutQuestionnaireVersionInput)
    connectOrCreate?: Array<SectionCreateOrConnectWithoutQuestionnaireVersionInput>;

    @Field(() => SectionCreateManyQuestionnaireVersionInputEnvelope, {nullable:true})
    @Type(() => SectionCreateManyQuestionnaireVersionInputEnvelope)
    createMany?: SectionCreateManyQuestionnaireVersionInputEnvelope;

    @Field(() => [SectionWhereUniqueInput], {nullable:true})
    @Type(() => SectionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SectionWhereUniqueInput, 'id'>>;
}
