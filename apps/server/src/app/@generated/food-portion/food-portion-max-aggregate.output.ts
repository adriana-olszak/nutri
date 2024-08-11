import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FoodPortionMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    gramWeight?: number;

    @Field(() => String, {nullable:true})
    portionDescription?: string;

    @Field(() => String, {nullable:true})
    sourceId?: string;

    @Field(() => String, {nullable:true})
    foodId?: string;

    @Field(() => String, {nullable:true})
    measureUnitName?: string;

    @Field(() => String, {nullable:true})
    importInfoId?: string;
}
