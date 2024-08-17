import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { Type } from 'class-transformer';
import { SectionUpdateWithoutQuestionnaireVersionInput } from './section-update-without-questionnaire-version.input';

@InputType()
export class SectionUpdateWithWhereUniqueWithoutQuestionnaireVersionInput {

    @Field(() => SectionWhereUniqueInput, {nullable:false})
    @Type(() => SectionWhereUniqueInput)
    where!: Prisma.AtLeast<SectionWhereUniqueInput, 'id'>;

    @Field(() => SectionUpdateWithoutQuestionnaireVersionInput, {nullable:false})
    @Type(() => SectionUpdateWithoutQuestionnaireVersionInput)
    data!: SectionUpdateWithoutQuestionnaireVersionInput;
}
