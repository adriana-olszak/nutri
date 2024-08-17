import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { QuestionCreateNestedManyWithoutSectionInput } from '../question/question-create-nested-many-without-section.input';

@InputType()
export class SectionCreateWithoutQuestionnaireVersionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => QuestionCreateNestedManyWithoutSectionInput, {nullable:true})
    questions?: QuestionCreateNestedManyWithoutSectionInput;
}
