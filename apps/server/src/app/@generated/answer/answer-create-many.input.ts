import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class AnswerCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    submissionId!: string;

    @Field(() => String, {nullable:false})
    questionId!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    value!: any;
}
