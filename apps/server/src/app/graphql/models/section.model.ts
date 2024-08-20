import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Question } from './question.model';

@ObjectType()
export class Section {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    questionnaireVersionId!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => [Question], {nullable:true})
    questions?: Array<Question>;

}
