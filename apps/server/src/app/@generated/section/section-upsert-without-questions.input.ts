import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionUpdateWithoutQuestionsInput } from './section-update-without-questions.input';
import { Type } from 'class-transformer';
import { SectionCreateWithoutQuestionsInput } from './section-create-without-questions.input';
import { SectionWhereInput } from './section-where.input';

@InputType()
export class SectionUpsertWithoutQuestionsInput {

    @Field(() => SectionUpdateWithoutQuestionsInput, {nullable:false})
    @Type(() => SectionUpdateWithoutQuestionsInput)
    update!: SectionUpdateWithoutQuestionsInput;

    @Field(() => SectionCreateWithoutQuestionsInput, {nullable:false})
    @Type(() => SectionCreateWithoutQuestionsInput)
    create!: SectionCreateWithoutQuestionsInput;

    @Field(() => SectionWhereInput, {nullable:true})
    @Type(() => SectionWhereInput)
    where?: SectionWhereInput;
}
