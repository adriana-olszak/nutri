import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodNutrientCreateNestedManyWithoutFoodInput } from '../food-nutrient/food-nutrient-create-nested-many-without-food.input';
import { FoodPortionCreateNestedManyWithoutFoodInput } from '../food-portion/food-portion-create-nested-many-without-food.input';
import { BrandedFoodCreateNestedOneWithoutFoodInput } from '../branded-food/branded-food-create-nested-one-without-food.input';
import { FoodCategoryOnFoodCreateNestedManyWithoutFoodInput } from '../food-category-on-food/food-category-on-food-create-nested-many-without-food.input';
import { FoodSearchVectorCreateNestedManyWithoutFoodInput } from '../food-search-vector/food-search-vector-create-nested-many-without-food.input';
import { ImportInfoCreateNestedOneWithoutFoodsInput } from '../import-info/import-info-create-nested-one-without-foods.input';
import { RecipeIngredientCreateNestedManyWithoutFoodInput } from '../recipe-ingredient/recipe-ingredient-create-nested-many-without-food.input';

@InputType()
export class FoodCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:true})
    scientificName?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FoodNutrientCreateNestedManyWithoutFoodInput, {nullable:true})
    nutrients?: FoodNutrientCreateNestedManyWithoutFoodInput;

    @Field(() => FoodPortionCreateNestedManyWithoutFoodInput, {nullable:true})
    portions?: FoodPortionCreateNestedManyWithoutFoodInput;

    @Field(() => BrandedFoodCreateNestedOneWithoutFoodInput, {nullable:true})
    brandedFood?: BrandedFoodCreateNestedOneWithoutFoodInput;

    @Field(() => FoodCategoryOnFoodCreateNestedManyWithoutFoodInput, {nullable:true})
    categories?: FoodCategoryOnFoodCreateNestedManyWithoutFoodInput;

    @Field(() => FoodSearchVectorCreateNestedManyWithoutFoodInput, {nullable:true})
    searchVectors?: FoodSearchVectorCreateNestedManyWithoutFoodInput;

    @Field(() => ImportInfoCreateNestedOneWithoutFoodsInput, {nullable:true})
    importInfo?: ImportInfoCreateNestedOneWithoutFoodsInput;

    @Field(() => RecipeIngredientCreateNestedManyWithoutFoodInput, {nullable:true})
    RecipeIngredient?: RecipeIngredientCreateNestedManyWithoutFoodInput;
}
