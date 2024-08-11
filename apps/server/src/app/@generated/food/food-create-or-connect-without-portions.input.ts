import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { Type } from 'class-transformer';
import { FoodCreateWithoutPortionsInput } from './food-create-without-portions.input';

@InputType()
export class FoodCreateOrConnectWithoutPortionsInput {

    @Field(() => FoodWhereUniqueInput, {nullable:false})
    @Type(() => FoodWhereUniqueInput)
    where!: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;

    @Field(() => FoodCreateWithoutPortionsInput, {nullable:false})
    @Type(() => FoodCreateWithoutPortionsInput)
    create!: FoodCreateWithoutPortionsInput;
}
