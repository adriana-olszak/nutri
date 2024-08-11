import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCreateWithoutCategoriesInput } from './food-create-without-categories.input';
import { Type } from 'class-transformer';
import { FoodCreateOrConnectWithoutCategoriesInput } from './food-create-or-connect-without-categories.input';
import { FoodUpsertWithoutCategoriesInput } from './food-upsert-without-categories.input';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { FoodUpdateToOneWithWhereWithoutCategoriesInput } from './food-update-to-one-with-where-without-categories.input';

@InputType()
export class FoodUpdateOneRequiredWithoutCategoriesNestedInput {

    @Field(() => FoodCreateWithoutCategoriesInput, {nullable:true})
    @Type(() => FoodCreateWithoutCategoriesInput)
    create?: FoodCreateWithoutCategoriesInput;

    @Field(() => FoodCreateOrConnectWithoutCategoriesInput, {nullable:true})
    @Type(() => FoodCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: FoodCreateOrConnectWithoutCategoriesInput;

    @Field(() => FoodUpsertWithoutCategoriesInput, {nullable:true})
    @Type(() => FoodUpsertWithoutCategoriesInput)
    upsert?: FoodUpsertWithoutCategoriesInput;

    @Field(() => FoodWhereUniqueInput, {nullable:true})
    @Type(() => FoodWhereUniqueInput)
    connect?: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;

    @Field(() => FoodUpdateToOneWithWhereWithoutCategoriesInput, {nullable:true})
    @Type(() => FoodUpdateToOneWithWhereWithoutCategoriesInput)
    update?: FoodUpdateToOneWithWhereWithoutCategoriesInput;
}
