import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionWhereInput } from './section-where.input';
import { Type } from 'class-transformer';
import { SectionUpdateWithoutQuestionsInput } from './section-update-without-questions.input';

@InputType()
export class SectionUpdateToOneWithWhereWithoutQuestionsInput {

    @Field(() => SectionWhereInput, {nullable:true})
    @Type(() => SectionWhereInput)
    where?: SectionWhereInput;

    @Field(() => SectionUpdateWithoutQuestionsInput, {nullable:false})
    @Type(() => SectionUpdateWithoutQuestionsInput)
    data!: SectionUpdateWithoutQuestionsInput;
}
