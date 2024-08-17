import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { Type } from 'class-transformer';
import { QuestionCreateWithoutSectionInput } from './question-create-without-section.input';

@InputType()
export class QuestionCreateOrConnectWithoutSectionInput {

    @Field(() => QuestionWhereUniqueInput, {nullable:false})
    @Type(() => QuestionWhereUniqueInput)
    where!: Prisma.AtLeast<QuestionWhereUniqueInput, 'id'>;

    @Field(() => QuestionCreateWithoutSectionInput, {nullable:false})
    @Type(() => QuestionCreateWithoutSectionInput)
    create!: QuestionCreateWithoutSectionInput;
}
