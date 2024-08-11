import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FoodCategoryOnFoodUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    foodId!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => Boolean, {nullable:true})
    isPrimaryCategory?: boolean;
}
