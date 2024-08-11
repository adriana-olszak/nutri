import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodDataSource } from '../prisma/food-data-source.enum';
import { FoodCategoryUncheckedCreateNestedManyWithoutImportInfoInput } from '../food-category/food-category-unchecked-create-nested-many-without-import-info.input';
import { BrandedFoodUncheckedCreateNestedManyWithoutImportInfoInput } from '../branded-food/branded-food-unchecked-create-nested-many-without-import-info.input';
import { NutrientUncheckedCreateNestedManyWithoutImportInfoInput } from '../nutrient/nutrient-unchecked-create-nested-many-without-import-info.input';
import { FoodNutrientUncheckedCreateNestedManyWithoutImportInfoInput } from '../food-nutrient/food-nutrient-unchecked-create-nested-many-without-import-info.input';
import { FoodPortionUncheckedCreateNestedManyWithoutImportInfoInput } from '../food-portion/food-portion-unchecked-create-nested-many-without-import-info.input';
import { MeasureUnitUncheckedCreateNestedManyWithoutImportInfoInput } from '../measure-unit/measure-unit-unchecked-create-nested-many-without-import-info.input';

@InputType()
export class ImportInfoUncheckedCreateWithoutFoodsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    sourceVersion!: string;

    @Field(() => Date, {nullable:false})
    importDate!: Date | string;

    @Field(() => FoodDataSource, {nullable:false})
    dataSource!: keyof typeof FoodDataSource;

    @Field(() => FoodCategoryUncheckedCreateNestedManyWithoutImportInfoInput, {nullable:true})
    foodCategories?: FoodCategoryUncheckedCreateNestedManyWithoutImportInfoInput;

    @Field(() => BrandedFoodUncheckedCreateNestedManyWithoutImportInfoInput, {nullable:true})
    brandedFoods?: BrandedFoodUncheckedCreateNestedManyWithoutImportInfoInput;

    @Field(() => NutrientUncheckedCreateNestedManyWithoutImportInfoInput, {nullable:true})
    nutrients?: NutrientUncheckedCreateNestedManyWithoutImportInfoInput;

    @Field(() => FoodNutrientUncheckedCreateNestedManyWithoutImportInfoInput, {nullable:true})
    foodNutrients?: FoodNutrientUncheckedCreateNestedManyWithoutImportInfoInput;

    @Field(() => FoodPortionUncheckedCreateNestedManyWithoutImportInfoInput, {nullable:true})
    foodPortions?: FoodPortionUncheckedCreateNestedManyWithoutImportInfoInput;

    @Field(() => MeasureUnitUncheckedCreateNestedManyWithoutImportInfoInput, {nullable:true})
    measureUnits?: MeasureUnitUncheckedCreateNestedManyWithoutImportInfoInput;
}
