import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodCategoryWhereUniqueInput } from './food-category-where-unique.input';
import { Type } from 'class-transformer';
import { FoodCategoryCreateWithoutParentCategoryInput } from './food-category-create-without-parent-category.input';

@InputType()
export class FoodCategoryCreateOrConnectWithoutParentCategoryInput {

    @Field(() => FoodCategoryWhereUniqueInput, {nullable:false})
    @Type(() => FoodCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<FoodCategoryWhereUniqueInput, 'id' | 'code' | 'description' | 'sourceId'>;

    @Field(() => FoodCategoryCreateWithoutParentCategoryInput, {nullable:false})
    @Type(() => FoodCategoryCreateWithoutParentCategoryInput)
    create!: FoodCategoryCreateWithoutParentCategoryInput;
}
