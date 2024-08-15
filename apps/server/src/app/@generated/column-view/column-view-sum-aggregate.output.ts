import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ColumnViewSumAggregate {

    @Field(() => Int, {nullable:true})
    columnId?: number;

    @Field(() => Int, {nullable:true})
    width?: number;
}
