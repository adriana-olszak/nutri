import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateWithoutSectionInput } from './question-create-without-section.input';
import { Type } from 'class-transformer';
import { QuestionCreateOrConnectWithoutSectionInput } from './question-create-or-connect-without-section.input';
import { QuestionUpsertWithWhereUniqueWithoutSectionInput } from './question-upsert-with-where-unique-without-section.input';
import { QuestionCreateManySectionInputEnvelope } from './question-create-many-section-input-envelope.input';
import { Prisma } from '@prisma/client';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { QuestionUpdateWithWhereUniqueWithoutSectionInput } from './question-update-with-where-unique-without-section.input';
import { QuestionUpdateManyWithWhereWithoutSectionInput } from './question-update-many-with-where-without-section.input';
import { QuestionScalarWhereInput } from './question-scalar-where.input';

@InputType()
export class QuestionUpdateManyWithoutSectionNestedInput {

    @Field(() => [QuestionCreateWithoutSectionInput], {nullable:true})
    @Type(() => QuestionCreateWithoutSectionInput)
    create?: Array<QuestionCreateWithoutSectionInput>;

    @Field(() => [QuestionCreateOrConnectWithoutSectionInput], {nullable:true})
    @Type(() => QuestionCreateOrConnectWithoutSectionInput)
    connectOrCreate?: Array<QuestionCreateOrConnectWithoutSectionInput>;

    @Field(() => [QuestionUpsertWithWhereUniqueWithoutSectionInput], {nullable:true})
    @Type(() => QuestionUpsertWithWhereUniqueWithoutSectionInput)
    upsert?: Array<QuestionUpsertWithWhereUniqueWithoutSectionInput>;

    @Field(() => QuestionCreateManySectionInputEnvelope, {nullable:true})
    @Type(() => QuestionCreateManySectionInputEnvelope)
    createMany?: QuestionCreateManySectionInputEnvelope;

    @Field(() => [QuestionWhereUniqueInput], {nullable:true})
    @Type(() => QuestionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<QuestionWhereUniqueInput, 'id'>>;

    @Field(() => [QuestionWhereUniqueInput], {nullable:true})
    @Type(() => QuestionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<QuestionWhereUniqueInput, 'id'>>;

    @Field(() => [QuestionWhereUniqueInput], {nullable:true})
    @Type(() => QuestionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<QuestionWhereUniqueInput, 'id'>>;

    @Field(() => [QuestionWhereUniqueInput], {nullable:true})
    @Type(() => QuestionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<QuestionWhereUniqueInput, 'id'>>;

    @Field(() => [QuestionUpdateWithWhereUniqueWithoutSectionInput], {nullable:true})
    @Type(() => QuestionUpdateWithWhereUniqueWithoutSectionInput)
    update?: Array<QuestionUpdateWithWhereUniqueWithoutSectionInput>;

    @Field(() => [QuestionUpdateManyWithWhereWithoutSectionInput], {nullable:true})
    @Type(() => QuestionUpdateManyWithWhereWithoutSectionInput)
    updateMany?: Array<QuestionUpdateManyWithWhereWithoutSectionInput>;

    @Field(() => [QuestionScalarWhereInput], {nullable:true})
    @Type(() => QuestionScalarWhereInput)
    deleteMany?: Array<QuestionScalarWhereInput>;
}
