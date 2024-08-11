import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodPortionWhereUniqueInput } from './food-portion-where-unique.input';
import { Type } from 'class-transformer';
import { FoodPortionCreateInput } from './food-portion-create.input';
import { FoodPortionUpdateInput } from './food-portion-update.input';

@ArgsType()
export class UpsertOneFoodPortionArgs {

    @Field(() => FoodPortionWhereUniqueInput, {nullable:false})
    @Type(() => FoodPortionWhereUniqueInput)
    where!: Prisma.AtLeast<FoodPortionWhereUniqueInput, 'id'>;

    @Field(() => FoodPortionCreateInput, {nullable:false})
    @Type(() => FoodPortionCreateInput)
    create!: FoodPortionCreateInput;

    @Field(() => FoodPortionUpdateInput, {nullable:false})
    @Type(() => FoodPortionUpdateInput)
    update!: FoodPortionUpdateInput;
}
