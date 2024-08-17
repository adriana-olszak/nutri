import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateWithoutSectionInput } from './question-create-without-section.input';
import { Type } from 'class-transformer';
import { QuestionCreateOrConnectWithoutSectionInput } from './question-create-or-connect-without-section.input';
import { QuestionCreateManySectionInputEnvelope } from './question-create-many-section-input-envelope.input';
import { Prisma } from '@prisma/client';
import { QuestionWhereUniqueInput } from './question-where-unique.input';

@InputType()
export class QuestionCreateNestedManyWithoutSectionInput {

    @Field(() => [QuestionCreateWithoutSectionInput], {nullable:true})
    @Type(() => QuestionCreateWithoutSectionInput)
    create?: Array<QuestionCreateWithoutSectionInput>;

    @Field(() => [QuestionCreateOrConnectWithoutSectionInput], {nullable:true})
    @Type(() => QuestionCreateOrConnectWithoutSectionInput)
    connectOrCreate?: Array<QuestionCreateOrConnectWithoutSectionInput>;

    @Field(() => QuestionCreateManySectionInputEnvelope, {nullable:true})
    @Type(() => QuestionCreateManySectionInputEnvelope)
    createMany?: QuestionCreateManySectionInputEnvelope;

    @Field(() => [QuestionWhereUniqueInput], {nullable:true})
    @Type(() => QuestionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<QuestionWhereUniqueInput, 'id'>>;
}
