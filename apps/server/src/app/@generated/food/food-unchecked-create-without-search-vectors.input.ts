import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodNutrientUncheckedCreateNestedManyWithoutFoodInput } from '../food-nutrient/food-nutrient-unchecked-create-nested-many-without-food.input';
import { FoodPortionUncheckedCreateNestedManyWithoutFoodInput } from '../food-portion/food-portion-unchecked-create-nested-many-without-food.input';
import { BrandedFoodUncheckedCreateNestedOneWithoutFoodInput } from '../branded-food/branded-food-unchecked-create-nested-one-without-food.input';
import { FoodCategoryOnFoodUncheckedCreateNestedManyWithoutFoodInput } from '../food-category-on-food/food-category-on-food-unchecked-create-nested-many-without-food.input';
import { RecipeIngredientUncheckedCreateNestedManyWithoutFoodInput } from '../recipe-ingredient/recipe-ingredient-unchecked-create-nested-many-without-food.input';

@InputType()
export class FoodUncheckedCreateWithoutSearchVectorsInput {

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

    @Field(() => FoodPortionUncheckedCreateNestedManyWithoutFoodInput, {nullable:true})
    portions?: FoodPortionUncheckedCreateNestedManyWithoutFoodInput;

    @Field(() => BrandedFoodUncheckedCreateNestedOneWithoutFoodInput, {nullable:true})
    brandedFood?: BrandedFoodUncheckedCreateNestedOneWithoutFoodInput;

    @Field(() => FoodCategoryOnFoodUncheckedCreateNestedManyWithoutFoodInput, {nullable:true})
    categories?: FoodCategoryOnFoodUncheckedCreateNestedManyWithoutFoodInput;

    @Field(() => RecipeIngredientUncheckedCreateNestedManyWithoutFoodInput, {nullable:true})
    RecipeIngredient?: RecipeIngredientUncheckedCreateNestedManyWithoutFoodInput;
}
