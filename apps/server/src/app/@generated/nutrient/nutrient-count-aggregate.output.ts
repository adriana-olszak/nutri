import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NutrientCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    unitName!: number;

    @Field(() => Int, {nullable:false})
    sourceId!: number;

    @Field(() => Int, {nullable:false})
    importInfoId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
