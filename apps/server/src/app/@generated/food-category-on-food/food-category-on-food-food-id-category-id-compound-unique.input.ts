import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FoodCategoryOnFoodFoodIdCategoryIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    foodId!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;
}
