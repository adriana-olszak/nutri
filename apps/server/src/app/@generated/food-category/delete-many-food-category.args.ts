import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodCategoryWhereInput } from './food-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFoodCategoryArgs {

    @Field(() => FoodCategoryWhereInput, {nullable:true})
    @Type(() => FoodCategoryWhereInput)
    where?: FoodCategoryWhereInput;
}
