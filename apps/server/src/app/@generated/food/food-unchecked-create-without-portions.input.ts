import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodNutrientUncheckedCreateNestedManyWithoutFoodInput } from '../food-nutrient/food-nutrient-unchecked-create-nested-many-without-food.input';
import { BrandedFoodUncheckedCreateNestedOneWithoutFoodInput } from '../branded-food/branded-food-unchecked-create-nested-one-without-food.input';
import { FoodCategoryOnFoodUncheckedCreateNestedManyWithoutFoodInput } from '../food-category-on-food/food-category-on-food-unchecked-create-nested-many-without-food.input';
import { FoodSearchVectorUncheckedCreateNestedManyWithoutFoodInput } from '../food-search-vector/food-search-vector-unchecked-create-nested-many-without-food.input';
import { RecipeIngredientUncheckedCreateNestedManyWithoutFoodInput } from '../recipe-ingredient/recipe-ingredient-unchecked-create-nested-many-without-food.input';

@InputType()
export class FoodUncheckedCreateWithoutPortionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:true})
    scientificName?: string;

    @Field(() => String, {nullable:false})
    importInfoId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FoodNutrientUncheckedCreateNestedManyWithoutFoodInput, {nullable:true})
    nutrients?: FoodNutrientUncheckedCreateNestedManyWithoutFoodInput;

    @Field(() => BrandedFoodUncheckedCreateNestedOneWithoutFoodInput, {nullable:true})
    brandedFood?: BrandedFoodUncheckedCreateNestedOneWithoutFoodInput;

    @Field(() => FoodCategoryOnFoodUncheckedCreateNestedManyWithoutFoodInput, {nullable:true})
    categories?: FoodCategoryOnFoodUncheckedCreateNestedManyWithoutFoodInput;

    @Field(() => FoodSearchVectorUncheckedCreateNestedManyWithoutFoodInput, {nullable:true})
    searchVectors?: FoodSearchVectorUncheckedCreateNestedManyWithoutFoodInput;

    @Field(() => RecipeIngredientUncheckedCreateNestedManyWithoutFoodInput, {nullable:true})
    RecipeIngredient?: RecipeIngredientUncheckedCreateNestedManyWithoutFoodInput;
}
