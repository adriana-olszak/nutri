import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodSearchVectorUpdateInput } from './food-search-vector-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FoodSearchVectorWhereUniqueInput } from './food-search-vector-where-unique.input';

@ArgsType()
export class UpdateOneFoodSearchVectorArgs {

    @Field(() => FoodSearchVectorUpdateInput, {nullable:false})
    @Type(() => FoodSearchVectorUpdateInput)
    data!: FoodSearchVectorUpdateInput;

    @Field(() => FoodSearchVectorWhereUniqueInput, {nullable:false})
    @Type(() => FoodSearchVectorWhereUniqueInput)
    where!: Prisma.AtLeast<FoodSearchVectorWhereUniqueInput, 'id' | 'foodId_languageCode'>;
}
