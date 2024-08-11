import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodCategoryCreateManyInput } from './food-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFoodCategoryArgs {

    @Field(() => [FoodCategoryCreateManyInput], {nullable:false})
    @Type(() => FoodCategoryCreateManyInput)
    data!: Array<FoodCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
