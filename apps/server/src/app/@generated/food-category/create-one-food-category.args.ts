import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodCategoryCreateInput } from './food-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFoodCategoryArgs {

    @Field(() => FoodCategoryCreateInput, {nullable:false})
    @Type(() => FoodCategoryCreateInput)
    data!: FoodCategoryCreateInput;
}
