import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { Type } from 'class-transformer';
import { SectionCreateWithoutQuestionnaireVersionInput } from './section-create-without-questionnaire-version.input';

@InputType()
export class SectionCreateOrConnectWithoutQuestionnaireVersionInput {

    @Field(() => SectionWhereUniqueInput, {nullable:false})
    @Type(() => SectionWhereUniqueInput)
    where!: Prisma.AtLeast<SectionWhereUniqueInput, 'id'>;

    @Field(() => SectionCreateWithoutQuestionnaireVersionInput, {nullable:false})
    @Type(() => SectionCreateWithoutQuestionnaireVersionInput)
    create!: SectionCreateWithoutQuestionnaireVersionInput;
}
