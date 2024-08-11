import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCreateWithoutPortionsInput } from './food-create-without-portions.input';
import { Type } from 'class-transformer';
import { FoodCreateOrConnectWithoutPortionsInput } from './food-create-or-connect-without-portions.input';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';

@InputType()
export class FoodCreateNestedOneWithoutPortionsInput {

    @Field(() => FoodCreateWithoutPortionsInput, {nullable:true})
    @Type(() => FoodCreateWithoutPortionsInput)
    create?: FoodCreateWithoutPortionsInput;

    @Field(() => FoodCreateOrConnectWithoutPortionsInput, {nullable:true})
    @Type(() => FoodCreateOrConnectWithoutPortionsInput)
    connectOrCreate?: FoodCreateOrConnectWithoutPortionsInput;

    @Field(() => FoodWhereUniqueInput, {nullable:true})
    @Type(() => FoodWhereUniqueInput)
    connect?: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;
}
