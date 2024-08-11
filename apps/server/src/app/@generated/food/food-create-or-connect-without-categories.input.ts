import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { Type } from 'class-transformer';
import { FoodCreateWithoutCategoriesInput } from './food-create-without-categories.input';

@InputType()
export class FoodCreateOrConnectWithoutCategoriesInput {

    @Field(() => FoodWhereUniqueInput, {nullable:false})
    @Type(() => FoodWhereUniqueInput)
    where!: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;

    @Field(() => FoodCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => FoodCreateWithoutCategoriesInput)
    create!: FoodCreateWithoutCategoriesInput;
}
