import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { Type } from 'class-transformer';
import { SectionCreateWithoutQuestionsInput } from './section-create-without-questions.input';

@InputType()
export class SectionCreateOrConnectWithoutQuestionsInput {

    @Field(() => SectionWhereUniqueInput, {nullable:false})
    @Type(() => SectionWhereUniqueInput)
    where!: Prisma.AtLeast<SectionWhereUniqueInput, 'id'>;

    @Field(() => SectionCreateWithoutQuestionsInput, {nullable:false})
    @Type(() => SectionCreateWithoutQuestionsInput)
    create!: SectionCreateWithoutQuestionsInput;
}
