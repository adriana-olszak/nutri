import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodCategoryWhereUniqueInput } from './food-category-where-unique.input';
import { Type } from 'class-transformer';
import { FoodCategoryCreateInput } from './food-category-create.input';
import { FoodCategoryUpdateInput } from './food-category-update.input';

@ArgsType()
export class UpsertOneFoodCategoryArgs {

    @Field(() => FoodCategoryWhereUniqueInput, {nullable:false})
    @Type(() => FoodCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<FoodCategoryWhereUniqueInput, 'id' | 'code' | 'description' | 'sourceId'>;

    @Field(() => FoodCategoryCreateInput, {nullable:false})
    @Type(() => FoodCategoryCreateInput)
    create!: FoodCategoryCreateInput;

    @Field(() => FoodCategoryUpdateInput, {nullable:false})
    @Type(() => FoodCategoryUpdateInput)
    update!: FoodCategoryUpdateInput;
}
