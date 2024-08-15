import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { FoodCategoryOnFoodUncheckedUpdateManyWithoutCategoryNestedInput } from '../food-category-on-food/food-category-on-food-unchecked-update-many-without-category-nested.input';
import { FoodCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput } from './food-category-unchecked-update-many-without-parent-category-nested.input';

@InputType()
export class FoodCategoryUncheckedUpdateWithoutParentCategoryInput {

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

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    importInfoId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => FoodCategoryOnFoodUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    foods?: FoodCategoryOnFoodUncheckedUpdateManyWithoutCategoryNestedInput;

    @Field(() => FoodCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput, {nullable:true})
    childCategories?: FoodCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput;
}
