import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Submission } from '../submission/submission.model';
import { Question } from '../question/question.model';

@ObjectType()
export class Answer {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    submissionId!: string;

    @Field(() => String, {nullable:false})
    questionId!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    value!: any;

    @Field(() => Submission, {nullable:false})
    submission?: Submission;

    @Field(() => Question, {nullable:false})
    question?: Question;
}
