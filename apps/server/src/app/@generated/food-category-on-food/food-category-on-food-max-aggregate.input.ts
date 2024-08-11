import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FoodCategoryOnFoodMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    foodId?: true;

    @Field(() => Boolean, {nullable:true})
    categoryId?: true;

    @Field(() => Boolean, {nullable:true})
    isPrimaryCategory?: true;
}
