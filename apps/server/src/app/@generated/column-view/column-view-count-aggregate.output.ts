import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ColumnViewCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    columnId!: number;

    @Field(() => Int, {nullable:false})
    columnType!: number;

    @Field(() => Int, {nullable:false})
    width!: number;

    @Field(() => Int, {nullable:false})
    visible!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    filter!: number;

    @Field(() => Int, {nullable:false})
    tableViewDefinitionId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
