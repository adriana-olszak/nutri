import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodCategoryUpdateInput } from './food-category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FoodCategoryWhereUniqueInput } from './food-category-where-unique.input';

@ArgsType()
export class UpdateOneFoodCategoryArgs {

    @Field(() => FoodCategoryUpdateInput, {nullable:false})
    @Type(() => FoodCategoryUpdateInput)
    data!: FoodCategoryUpdateInput;

    @Field(() => FoodCategoryWhereUniqueInput, {nullable:false})
    @Type(() => FoodCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<FoodCategoryWhereUniqueInput, 'id' | 'code' | 'description' | 'sourceId'>;
}
