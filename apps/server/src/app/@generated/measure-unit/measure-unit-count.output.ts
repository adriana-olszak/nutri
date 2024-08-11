import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MeasureUnitCount {

    @Field(() => Int, {nullable:false})
    FoodPortion?: number;
}
