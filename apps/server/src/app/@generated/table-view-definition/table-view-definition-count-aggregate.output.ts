import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TableViewDefinitionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    tableId!: number;

    @Field(() => Int, {nullable:false})
    tableType!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => Int, {nullable:false})
    icon!: number;

    @Field(() => Int, {nullable:false})
    filters!: number;

    @Field(() => Int, {nullable:false})
    sorting!: number;

    @Field(() => Int, {nullable:false})
    isPreset!: number;

    @Field(() => Int, {nullable:false})
    isShared!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
