import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodPortionUpdateInput } from './food-portion-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FoodPortionWhereUniqueInput } from './food-portion-where-unique.input';

@ArgsType()
export class UpdateOneFoodPortionArgs {

    @Field(() => FoodPortionUpdateInput, {nullable:false})
    @Type(() => FoodPortionUpdateInput)
    data!: FoodPortionUpdateInput;

    @Field(() => FoodPortionWhereUniqueInput, {nullable:false})
    @Type(() => FoodPortionWhereUniqueInput)
    where!: Prisma.AtLeast<FoodPortionWhereUniqueInput, 'id'>;
}
