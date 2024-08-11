import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodCategoryWhereUniqueInput } from './food-category-where-unique.input';
import { Type } from 'class-transformer';
import { FoodCategoryUpdateWithoutParentCategoryInput } from './food-category-update-without-parent-category.input';

@InputType()
export class FoodCategoryUpdateWithWhereUniqueWithoutParentCategoryInput {

    @Field(() => FoodCategoryWhereUniqueInput, {nullable:false})
    @Type(() => FoodCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<FoodCategoryWhereUniqueInput, 'id' | 'code' | 'description' | 'sourceId'>;

    @Field(() => FoodCategoryUpdateWithoutParentCategoryInput, {nullable:false})
    @Type(() => FoodCategoryUpdateWithoutParentCategoryInput)
    data!: FoodCategoryUpdateWithoutParentCategoryInput;
}
