import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodSearchVectorWhereUniqueInput } from './food-search-vector-where-unique.input';
import { Type } from 'class-transformer';

@InputType()
export class FoodSearchVectorCreateNestedManyWithoutLanguageInput {

    @Field(() => [FoodSearchVectorWhereUniqueInput], {nullable:true})
    @Type(() => FoodSearchVectorWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FoodSearchVectorWhereUniqueInput, 'id' | 'foodId_languageCode'>>;
}
