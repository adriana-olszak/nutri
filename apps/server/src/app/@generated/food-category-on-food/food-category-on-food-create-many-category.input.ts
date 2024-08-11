import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FoodCategoryOnFoodCreateManyCategoryInput {

    @Field(() => String, {nullable:false})
    foodId!: string;

    @Field(() => Boolean, {nullable:true})
    isPrimaryCategory?: boolean;
}
