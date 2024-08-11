import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodCategoryOnFoodCreateManyInput } from './food-category-on-food-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFoodCategoryOnFoodArgs {

    @Field(() => [FoodCategoryOnFoodCreateManyInput], {nullable:false})
    @Type(() => FoodCategoryOnFoodCreateManyInput)
    data!: Array<FoodCategoryOnFoodCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
