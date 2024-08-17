import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionCreateWithoutQuestionsInput } from './section-create-without-questions.input';
import { Type } from 'class-transformer';
import { SectionCreateOrConnectWithoutQuestionsInput } from './section-create-or-connect-without-questions.input';
import { Prisma } from '@prisma/client';
import { SectionWhereUniqueInput } from './section-where-unique.input';

@InputType()
export class SectionCreateNestedOneWithoutQuestionsInput {

    @Field(() => SectionCreateWithoutQuestionsInput, {nullable:true})
    @Type(() => SectionCreateWithoutQuestionsInput)
    create?: SectionCreateWithoutQuestionsInput;

    @Field(() => SectionCreateOrConnectWithoutQuestionsInput, {nullable:true})
    @Type(() => SectionCreateOrConnectWithoutQuestionsInput)
    connectOrCreate?: SectionCreateOrConnectWithoutQuestionsInput;

    @Field(() => SectionWhereUniqueInput, {nullable:true})
    @Type(() => SectionWhereUniqueInput)
    connect?: Prisma.AtLeast<SectionWhereUniqueInput, 'id'>;
}
