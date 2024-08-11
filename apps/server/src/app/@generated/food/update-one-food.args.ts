import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodUpdateInput } from './food-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';

@ArgsType()
export class UpdateOneFoodArgs {

    @Field(() => FoodUpdateInput, {nullable:false})
    @Type(() => FoodUpdateInput)
    data!: FoodUpdateInput;

    @Field(() => FoodWhereUniqueInput, {nullable:false})
    @Type(() => FoodWhereUniqueInput)
    where!: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;
}
