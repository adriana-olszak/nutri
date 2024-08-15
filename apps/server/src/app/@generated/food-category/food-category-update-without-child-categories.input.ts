import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { FoodCategoryOnFoodUpdateManyWithoutCategoryNestedInput } from '../food-category-on-food/food-category-on-food-update-many-without-category-nested.input';
import { ImportInfoUpdateOneWithoutFoodCategoriesNestedInput } from '../import-info/import-info-update-one-without-food-categories-nested.input';
import { FoodCategoryUpdateOneWithoutChildCategoriesNestedInput } from './food-category-update-one-without-child-categories-nested.input';

@InputType()
export class FoodCategoryUpdateWithoutChildCategoriesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    code?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    level?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sourceId?: StringFieldUpdateOperationsInput;

    @Field(() => FoodCategoryOnFoodUpdateManyWithoutCategoryNestedInput, {nullable:true})
    foods?: FoodCategoryOnFoodUpdateManyWithoutCategoryNestedInput;

    @Field(() => ImportInfoUpdateOneWithoutFoodCategoriesNestedInput, {nullable:true})
    importInfo?: ImportInfoUpdateOneWithoutFoodCategoriesNestedInput;

    @Field(() => FoodCategoryUpdateOneWithoutChildCategoriesNestedInput, {nullable:true})
    parentCategory?: FoodCategoryUpdateOneWithoutChildCategoriesNestedInput;
}
