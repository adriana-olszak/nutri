import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Section } from '../section/section.model';
import { Answer } from '../answer/answer.model';
import { QuestionCount } from './question-count.output';

@ObjectType()
export class Question {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    sectionId!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isRequired!: boolean;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => GraphQLJSON, {nullable:false})
    config!: any;

    @Field(() => Section, {nullable:false})
    section?: Section;

    @Field(() => [Answer], {nullable:true})
    answers?: Array<Answer>;

    @Field(() => QuestionCount, {nullable:false})
    _count?: QuestionCount;
}
