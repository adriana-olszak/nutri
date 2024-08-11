import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SeasonCount {

    @Field(() => Int, {nullable:false})
    recipes?: number;
}
