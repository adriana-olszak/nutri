import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryWhereInput } from './food-category-where.input';
import { Type } from 'class-transformer';
import { FoodCategoryUpdateWithoutFoodsInput } from './food-category-update-without-foods.input';

@InputType()
export class FoodCategoryUpdateToOneWithWhereWithoutFoodsInput {

    @Field(() => FoodCategoryWhereInput, {nullable:true})
    @Type(() => FoodCategoryWhereInput)
    where?: FoodCategoryWhereInput;

    @Field(() => FoodCategoryUpdateWithoutFoodsInput, {nullable:false})
    @Type(() => FoodCategoryUpdateWithoutFoodsInput)
    data!: FoodCategoryUpdateWithoutFoodsInput;
}
