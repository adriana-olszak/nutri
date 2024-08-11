import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ImportInfoCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    sourceVersion!: number;

    @Field(() => Int, {nullable:false})
    importDate!: number;

    @Field(() => Int, {nullable:false})
    dataSource!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
