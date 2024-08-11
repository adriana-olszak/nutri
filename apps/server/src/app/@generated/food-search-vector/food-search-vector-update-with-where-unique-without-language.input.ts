import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodSearchVectorWhereUniqueInput } from './food-search-vector-where-unique.input';
import { Type } from 'class-transformer';
import { FoodSearchVectorUpdateWithoutLanguageInput } from './food-search-vector-update-without-language.input';

@InputType()
export class FoodSearchVectorUpdateWithWhereUniqueWithoutLanguageInput {

    @Field(() => FoodSearchVectorWhereUniqueInput, {nullable:false})
    @Type(() => FoodSearchVectorWhereUniqueInput)
    where!: Prisma.AtLeast<FoodSearchVectorWhereUniqueInput, 'id' | 'foodId_languageCode'>;

    @Field(() => FoodSearchVectorUpdateWithoutLanguageInput, {nullable:false})
    @Type(() => FoodSearchVectorUpdateWithoutLanguageInput)
    data!: FoodSearchVectorUpdateWithoutLanguageInput;
}
