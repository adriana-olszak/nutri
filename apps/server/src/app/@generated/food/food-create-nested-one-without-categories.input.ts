import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCreateWithoutCategoriesInput } from './food-create-without-categories.input';
import { Type } from 'class-transformer';
import { FoodCreateOrConnectWithoutCategoriesInput } from './food-create-or-connect-without-categories.input';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';

@InputType()
export class FoodCreateNestedOneWithoutCategoriesInput {

    @Field(() => FoodCreateWithoutCategoriesInput, {nullable:true})
    @Type(() => FoodCreateWithoutCategoriesInput)
    create?: FoodCreateWithoutCategoriesInput;

    @Field(() => FoodCreateOrConnectWithoutCategoriesInput, {nullable:true})
    @Type(() => FoodCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: FoodCreateOrConnectWithoutCategoriesInput;

    @Field(() => FoodWhereUniqueInput, {nullable:true})
    @Type(() => FoodWhereUniqueInput)
    connect?: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;
}
