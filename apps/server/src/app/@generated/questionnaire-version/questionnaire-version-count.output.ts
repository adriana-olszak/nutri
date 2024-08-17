import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class QuestionnaireVersionCount {

    @Field(() => Int, {nullable:false})
    sections?: number;

    @Field(() => Int, {nullable:false})
    submissions?: number;
}
