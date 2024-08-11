import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCreateWithoutSearchVectorsInput } from './food-create-without-search-vectors.input';
import { Type } from 'class-transformer';
import { FoodCreateOrConnectWithoutSearchVectorsInput } from './food-create-or-connect-without-search-vectors.input';
import { FoodUpsertWithoutSearchVectorsInput } from './food-upsert-without-search-vectors.input';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { FoodUpdateToOneWithWhereWithoutSearchVectorsInput } from './food-update-to-one-with-where-without-search-vectors.input';

@InputType()
export class FoodUpdateOneRequiredWithoutSearchVectorsNestedInput {

    @Field(() => FoodCreateWithoutSearchVectorsInput, {nullable:true})
    @Type(() => FoodCreateWithoutSearchVectorsInput)
    create?: FoodCreateWithoutSearchVectorsInput;

    @Field(() => FoodCreateOrConnectWithoutSearchVectorsInput, {nullable:true})
    @Type(() => FoodCreateOrConnectWithoutSearchVectorsInput)
    connectOrCreate?: FoodCreateOrConnectWithoutSearchVectorsInput;

    @Field(() => FoodUpsertWithoutSearchVectorsInput, {nullable:true})
    @Type(() => FoodUpsertWithoutSearchVectorsInput)
    upsert?: FoodUpsertWithoutSearchVectorsInput;

    @Field(() => FoodWhereUniqueInput, {nullable:true})
    @Type(() => FoodWhereUniqueInput)
    connect?: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;

    @Field(() => FoodUpdateToOneWithWhereWithoutSearchVectorsInput, {nullable:true})
    @Type(() => FoodUpdateToOneWithWhereWithoutSearchVectorsInput)
    update?: FoodUpdateToOneWithWhereWithoutSearchVectorsInput;
}
