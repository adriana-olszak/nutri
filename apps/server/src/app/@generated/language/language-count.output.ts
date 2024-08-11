import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LanguageCount {

    @Field(() => Int, {nullable:false})
    translations?: number;

    @Field(() => Int, {nullable:false})
    searchVectors?: number;
}
