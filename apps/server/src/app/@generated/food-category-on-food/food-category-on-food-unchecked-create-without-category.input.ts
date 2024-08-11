import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FoodCategoryOnFoodUncheckedCreateWithoutCategoryInput {

    @Field(() => String, {nullable:false})
    foodId!: string;

    @Field(() => Boolean, {nullable:true})
    isPrimaryCategory?: boolean;
}
