import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { QuestionUncheckedCreateNestedManyWithoutSectionInput } from '../question/question-unchecked-create-nested-many-without-section.input';

@InputType()
export class SectionUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    questionnaireVersionId!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => QuestionUncheckedCreateNestedManyWithoutSectionInput, {nullable:true})
    questions?: QuestionUncheckedCreateNestedManyWithoutSectionInput;
}
