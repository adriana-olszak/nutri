import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { FoodNutrient } from '../food-nutrient/food-nutrient.model';
import { FoodPortion } from '../food-portion/food-portion.model';
import { BrandedFood } from '../branded-food/branded-food.model';
import { FoodCategoryOnFood } from '../food-category-on-food/food-category-on-food.model';
import { FoodSearchVector } from '../food-search-vector/food-search-vector.model';
import { ImportInfo } from '../import-info/import-info.model';
import { RecipeIngredient } from '../recipe-ingredient/recipe-ingredient.model';
import { FoodCount } from './food-count.output';

@ObjectType()
export class Food {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:true})
    scientificName!: string | null;

    @Field(() => String, {nullable:false})
    importInfoId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [FoodNutrient], {nullable:true})
    nutrients?: Array<FoodNutrient>;

    @Field(() => [FoodPortion], {nullable:true})
    portions?: Array<FoodPortion>;

    @Field(() => BrandedFood, {nullable:true})
    brandedFood?: BrandedFood | null;

    @Field(() => [FoodCategoryOnFood], {nullable:true})
    categories?: Array<FoodCategoryOnFood>;

    @Field(() => [FoodSearchVector], {nullable:true})
    searchVectors?: Array<FoodSearchVector>;

    @Field(() => ImportInfo, {nullable:false})
    importInfo?: ImportInfo;

    @Field(() => [RecipeIngredient], {nullable:true})
    RecipeIngredient?: Array<RecipeIngredient>;

    @Field(() => FoodCount, {nullable:false})
    _count?: FoodCount;
}
