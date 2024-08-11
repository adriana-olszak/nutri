import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryUpdateWithoutFoodsInput } from './food-category-update-without-foods.input';
import { Type } from 'class-transformer';
import { FoodCategoryCreateWithoutFoodsInput } from './food-category-create-without-foods.input';
import { FoodCategoryWhereInput } from './food-category-where.input';

@InputType()
export class FoodCategoryUpsertWithoutFoodsInput {

    @Field(() => FoodCategoryUpdateWithoutFoodsInput, {nullable:false})
    @Type(() => FoodCategoryUpdateWithoutFoodsInput)
    update!: FoodCategoryUpdateWithoutFoodsInput;

    @Field(() => FoodCategoryCreateWithoutFoodsInput, {nullable:false})
    @Type(() => FoodCategoryCreateWithoutFoodsInput)
    create!: FoodCategoryCreateWithoutFoodsInput;

    @Field(() => FoodCategoryWhereInput, {nullable:true})
    @Type(() => FoodCategoryWhereInput)
    where?: FoodCategoryWhereInput;
}
