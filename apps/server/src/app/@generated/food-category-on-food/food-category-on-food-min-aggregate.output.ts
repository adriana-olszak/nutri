import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FoodCategoryOnFoodMinAggregate {

    @Field(() => String, {nullable:true})
    foodId?: string;

    @Field(() => String, {nullable:true})
    categoryId?: string;

    @Field(() => Boolean, {nullable:true})
    isPrimaryCategory?: boolean;
}
