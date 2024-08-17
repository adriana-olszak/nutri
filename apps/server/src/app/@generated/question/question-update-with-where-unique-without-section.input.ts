import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { Type } from 'class-transformer';
import { QuestionUpdateWithoutSectionInput } from './question-update-without-section.input';

@InputType()
export class QuestionUpdateWithWhereUniqueWithoutSectionInput {

    @Field(() => QuestionWhereUniqueInput, {nullable:false})
    @Type(() => QuestionWhereUniqueInput)
    where!: Prisma.AtLeast<QuestionWhereUniqueInput, 'id'>;

    @Field(() => QuestionUpdateWithoutSectionInput, {nullable:false})
    @Type(() => QuestionUpdateWithoutSectionInput)
    data!: QuestionUpdateWithoutSectionInput;
}
