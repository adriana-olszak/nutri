import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { Type } from 'class-transformer';
import { FoodCreateWithoutSearchVectorsInput } from './food-create-without-search-vectors.input';

@InputType()
export class FoodCreateOrConnectWithoutSearchVectorsInput {

    @Field(() => FoodWhereUniqueInput, {nullable:false})
    @Type(() => FoodWhereUniqueInput)
    where!: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;

    @Field(() => FoodCreateWithoutSearchVectorsInput, {nullable:false})
    @Type(() => FoodCreateWithoutSearchVectorsInput)
    create!: FoodCreateWithoutSearchVectorsInput;
}
