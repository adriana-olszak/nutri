import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCreateWithoutPortionsInput } from './food-create-without-portions.input';
import { Type } from 'class-transformer';
import { FoodCreateOrConnectWithoutPortionsInput } from './food-create-or-connect-without-portions.input';
import { FoodUpsertWithoutPortionsInput } from './food-upsert-without-portions.input';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { FoodUpdateToOneWithWhereWithoutPortionsInput } from './food-update-to-one-with-where-without-portions.input';

@InputType()
export class FoodUpdateOneRequiredWithoutPortionsNestedInput {

    @Field(() => FoodCreateWithoutPortionsInput, {nullable:true})
    @Type(() => FoodCreateWithoutPortionsInput)
    create?: FoodCreateWithoutPortionsInput;

    @Field(() => FoodCreateOrConnectWithoutPortionsInput, {nullable:true})
    @Type(() => FoodCreateOrConnectWithoutPortionsInput)
    connectOrCreate?: FoodCreateOrConnectWithoutPortionsInput;

    @Field(() => FoodUpsertWithoutPortionsInput, {nullable:true})
    @Type(() => FoodUpsertWithoutPortionsInput)
    upsert?: FoodUpsertWithoutPortionsInput;

    @Field(() => FoodWhereUniqueInput, {nullable:true})
    @Type(() => FoodWhereUniqueInput)
    connect?: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;

    @Field(() => FoodUpdateToOneWithWhereWithoutPortionsInput, {nullable:true})
    @Type(() => FoodUpdateToOneWithWhereWithoutPortionsInput)
    update?: FoodUpdateToOneWithWhereWithoutPortionsInput;
}
