import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionCreateWithoutQuestionsInput } from './section-create-without-questions.input';
import { Type } from 'class-transformer';
import { SectionCreateOrConnectWithoutQuestionsInput } from './section-create-or-connect-without-questions.input';
import { SectionUpsertWithoutQuestionsInput } from './section-upsert-without-questions.input';
import { Prisma } from '@prisma/client';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionUpdateToOneWithWhereWithoutQuestionsInput } from './section-update-to-one-with-where-without-questions.input';

@InputType()
export class SectionUpdateOneRequiredWithoutQuestionsNestedInput {

    @Field(() => SectionCreateWithoutQuestionsInput, {nullable:true})
    @Type(() => SectionCreateWithoutQuestionsInput)
    create?: SectionCreateWithoutQuestionsInput;

    @Field(() => SectionCreateOrConnectWithoutQuestionsInput, {nullable:true})
    @Type(() => SectionCreateOrConnectWithoutQuestionsInput)
    connectOrCreate?: SectionCreateOrConnectWithoutQuestionsInput;

    @Field(() => SectionUpsertWithoutQuestionsInput, {nullable:true})
    @Type(() => SectionUpsertWithoutQuestionsInput)
    upsert?: SectionUpsertWithoutQuestionsInput;

    @Field(() => SectionWhereUniqueInput, {nullable:true})
    @Type(() => SectionWhereUniqueInput)
    connect?: Prisma.AtLeast<SectionWhereUniqueInput, 'id'>;

    @Field(() => SectionUpdateToOneWithWhereWithoutQuestionsInput, {nullable:true})
    @Type(() => SectionUpdateToOneWithWhereWithoutQuestionsInput)
    update?: SectionUpdateToOneWithWhereWithoutQuestionsInput;
}
