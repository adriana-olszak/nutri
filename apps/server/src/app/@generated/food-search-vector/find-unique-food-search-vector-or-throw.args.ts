import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodSearchVectorWhereUniqueInput } from './food-search-vector-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFoodSearchVectorOrThrowArgs {

    @Field(() => FoodSearchVectorWhereUniqueInput, {nullable:false})
    @Type(() => FoodSearchVectorWhereUniqueInput)
    where!: Prisma.AtLeast<FoodSearchVectorWhereUniqueInput, 'id' | 'foodId_languageCode'>;
}
