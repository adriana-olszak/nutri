import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodSearchVectorWhereUniqueInput } from './food-search-vector-where-unique.input';
import { Type } from 'class-transformer';
import { FoodSearchVectorUpdateWithWhereUniqueWithoutFoodInput } from './food-search-vector-update-with-where-unique-without-food.input';
import { FoodSearchVectorUpdateManyWithWhereWithoutFoodInput } from './food-search-vector-update-many-with-where-without-food.input';
import { FoodSearchVectorScalarWhereInput } from './food-search-vector-scalar-where.input';

@InputType()
export class FoodSearchVectorUpdateManyWithoutFoodNestedInput {

    @Field(() => [FoodSearchVectorWhereUniqueInput], {nullable:true})
    @Type(() => FoodSearchVectorWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FoodSearchVectorWhereUniqueInput, 'id' | 'foodId_languageCode'>>;

    @Field(() => [FoodSearchVectorWhereUniqueInput], {nullable:true})
    @Type(() => FoodSearchVectorWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FoodSearchVectorWhereUniqueInput, 'id' | 'foodId_languageCode'>>;

    @Field(() => [FoodSearchVectorWhereUniqueInput], {nullable:true})
    @Type(() => FoodSearchVectorWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FoodSearchVectorWhereUniqueInput, 'id' | 'foodId_languageCode'>>;

    @Field(() => [FoodSearchVectorWhereUniqueInput], {nullable:true})
    @Type(() => FoodSearchVectorWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FoodSearchVectorWhereUniqueInput, 'id' | 'foodId_languageCode'>>;

    @Field(() => [FoodSearchVectorUpdateWithWhereUniqueWithoutFoodInput], {nullable:true})
    @Type(() => FoodSearchVectorUpdateWithWhereUniqueWithoutFoodInput)
    update?: Array<FoodSearchVectorUpdateWithWhereUniqueWithoutFoodInput>;

    @Field(() => [FoodSearchVectorUpdateManyWithWhereWithoutFoodInput], {nullable:true})
    @Type(() => FoodSearchVectorUpdateManyWithWhereWithoutFoodInput)
    updateMany?: Array<FoodSearchVectorUpdateManyWithWhereWithoutFoodInput>;

    @Field(() => [FoodSearchVectorScalarWhereInput], {nullable:true})
    @Type(() => FoodSearchVectorScalarWhereInput)
    deleteMany?: Array<FoodSearchVectorScalarWhereInput>;
}
