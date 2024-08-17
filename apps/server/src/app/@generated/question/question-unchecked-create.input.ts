import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { AnswerUncheckedCreateNestedManyWithoutQuestionInput } from '../answer/answer-unchecked-create-nested-many-without-question.input';

@InputType()
export class QuestionUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    sectionId!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    isRequired?: boolean;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => GraphQLJSON, {nullable:false})
    config!: any;

    @Field(() => AnswerUncheckedCreateNestedManyWithoutQuestionInput, {nullable:true})
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput;
}
