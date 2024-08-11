import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FoodCategoryUncheckedCreateNestedManyWithoutParentCategoryInput } from './food-category-unchecked-create-nested-many-without-parent-category.input';

@InputType()
export class FoodCategoryUncheckedCreateWithoutFoodsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    parentCategoryId?: string;

    @Field(() => Int, {nullable:false})
    level!: number;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => String, {nullable:false})
    importInfoId!: string;

    @Field(() => FoodCategoryUncheckedCreateNestedManyWithoutParentCategoryInput, {nullable:true})
    childCategories?: FoodCategoryUncheckedCreateNestedManyWithoutParentCategoryInput;
}
