import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BrandedFoodAvgAggregate {

    @Field(() => Float, {nullable:true})
    servingSize?: number;
}
