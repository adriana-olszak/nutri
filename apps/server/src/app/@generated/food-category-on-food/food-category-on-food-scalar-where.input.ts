import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class FoodCategoryOnFoodScalarWhereInput {

    @Field(() => [FoodCategoryOnFoodScalarWhereInput], {nullable:true})
    AND?: Array<FoodCategoryOnFoodScalarWhereInput>;

    @Field(() => [FoodCategoryOnFoodScalarWhereInput], {nullable:true})
    OR?: Array<FoodCategoryOnFoodScalarWhereInput>;

    @Field(() => [FoodCategoryOnFoodScalarWhereInput], {nullable:true})
    NOT?: Array<FoodCategoryOnFoodScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    foodId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPrimaryCategory?: BoolFilter;
}
