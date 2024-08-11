import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodPortionWhereUniqueInput } from './food-portion-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFoodPortionOrThrowArgs {

    @Field(() => FoodPortionWhereUniqueInput, {nullable:false})
    @Type(() => FoodPortionWhereUniqueInput)
    where!: Prisma.AtLeast<FoodPortionWhereUniqueInput, 'id'>;
}
