import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryWhereInput } from './food-category-where.input';
import { Type } from 'class-transformer';
import { FoodCategoryUpdateWithoutChildCategoriesInput } from './food-category-update-without-child-categories.input';

@InputType()
export class FoodCategoryUpdateToOneWithWhereWithoutChildCategoriesInput {

    @Field(() => FoodCategoryWhereInput, {nullable:true})
    @Type(() => FoodCategoryWhereInput)
    where?: FoodCategoryWhereInput;

    @Field(() => FoodCategoryUpdateWithoutChildCategoriesInput, {nullable:false})
    @Type(() => FoodCategoryUpdateWithoutChildCategoriesInput)
    data!: FoodCategoryUpdateWithoutChildCategoriesInput;
}
