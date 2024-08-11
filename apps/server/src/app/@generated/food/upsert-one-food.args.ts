import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { Type } from 'class-transformer';
import { FoodCreateInput } from './food-create.input';
import { FoodUpdateInput } from './food-update.input';

@ArgsType()
export class UpsertOneFoodArgs {

    @Field(() => FoodWhereUniqueInput, {nullable:false})
    @Type(() => FoodWhereUniqueInput)
    where!: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;

    @Field(() => FoodCreateInput, {nullable:false})
    @Type(() => FoodCreateInput)
    create!: FoodCreateInput;

    @Field(() => FoodUpdateInput, {nullable:false})
    @Type(() => FoodUpdateInput)
    update!: FoodUpdateInput;
}
