import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class QuestionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, )
    sectionId: string;

    @Field(() => Boolean, {nullable:true})
    isRequired?: boolean;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => GraphQLJSON, {nullable:false})
    config!: any;
}
