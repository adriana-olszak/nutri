import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodCategoryUpdateManyMutationInput } from './food-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FoodCategoryWhereInput } from './food-category-where.input';

@ArgsType()
export class UpdateManyFoodCategoryArgs {

    @Field(() => FoodCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => FoodCategoryUpdateManyMutationInput)
    data!: FoodCategoryUpdateManyMutationInput;

    @Field(() => FoodCategoryWhereInput, {nullable:true})
    @Type(() => FoodCategoryWhereInput)
    where?: FoodCategoryWhereInput;
}
