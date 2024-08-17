import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionCreateWithoutQuestionnaireVersionInput } from './section-create-without-questionnaire-version.input';
import { Type } from 'class-transformer';
import { SectionCreateOrConnectWithoutQuestionnaireVersionInput } from './section-create-or-connect-without-questionnaire-version.input';
import { SectionUpsertWithWhereUniqueWithoutQuestionnaireVersionInput } from './section-upsert-with-where-unique-without-questionnaire-version.input';
import { SectionCreateManyQuestionnaireVersionInputEnvelope } from './section-create-many-questionnaire-version-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionUpdateWithWhereUniqueWithoutQuestionnaireVersionInput } from './section-update-with-where-unique-without-questionnaire-version.input';
import { SectionUpdateManyWithWhereWithoutQuestionnaireVersionInput } from './section-update-many-with-where-without-questionnaire-version.input';
import { SectionScalarWhereInput } from './section-scalar-where.input';

@InputType()
export class SectionUncheckedUpdateManyWithoutQuestionnaireVersionNestedInput {

    @Field(() => [SectionCreateWithoutQuestionnaireVersionInput], {nullable:true})
    @Type(() => SectionCreateWithoutQuestionnaireVersionInput)
    create?: Array<SectionCreateWithoutQuestionnaireVersionInput>;

    @Field(() => [SectionCreateOrConnectWithoutQuestionnaireVersionInput], {nullable:true})
    @Type(() => SectionCreateOrConnectWithoutQuestionnaireVersionInput)
    connectOrCreate?: Array<SectionCreateOrConnectWithoutQuestionnaireVersionInput>;

    @Field(() => [SectionUpsertWithWhereUniqueWithoutQuestionnaireVersionInput], {nullable:true})
    @Type(() => SectionUpsertWithWhereUniqueWithoutQuestionnaireVersionInput)
    upsert?: Array<SectionUpsertWithWhereUniqueWithoutQuestionnaireVersionInput>;

    @Field(() => SectionCreateManyQuestionnaireVersionInputEnvelope, {nullable:true})
    @Type(() => SectionCreateManyQuestionnaireVersionInputEnvelope)
    createMany?: SectionCreateManyQuestionnaireVersionInputEnvelope;

    @Field(() => [SectionWhereUniqueInput], {nullable:true})
    @Type(() => SectionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SectionWhereUniqueInput, 'id'>>;

    @Field(() => [SectionWhereUniqueInput], {nullable:true})
    @Type(() => SectionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SectionWhereUniqueInput, 'id'>>;

    @Field(() => [SectionWhereUniqueInput], {nullable:true})
    @Type(() => SectionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SectionWhereUniqueInput, 'id'>>;

    @Field(() => [SectionWhereUniqueInput], {nullable:true})
    @Type(() => SectionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SectionWhereUniqueInput, 'id'>>;

    @Field(() => [SectionUpdateWithWhereUniqueWithoutQuestionnaireVersionInput], {nullable:true})
    @Type(() => SectionUpdateWithWhereUniqueWithoutQuestionnaireVersionInput)
    update?: Array<SectionUpdateWithWhereUniqueWithoutQuestionnaireVersionInput>;

    @Field(() => [SectionUpdateManyWithWhereWithoutQuestionnaireVersionInput], {nullable:true})
    @Type(() => SectionUpdateManyWithWhereWithoutQuestionnaireVersionInput)
    updateMany?: Array<SectionUpdateManyWithWhereWithoutQuestionnaireVersionInput>;

    @Field(() => [SectionScalarWhereInput], {nullable:true})
    @Type(() => SectionScalarWhereInput)
    deleteMany?: Array<SectionScalarWhereInput>;
}
