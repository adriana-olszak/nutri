import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodSearchVectorWhereUniqueInput } from './food-search-vector-where-unique.input';
import { Type } from 'class-transformer';
import { FoodSearchVectorUpdateWithWhereUniqueWithoutLanguageInput } from './food-search-vector-update-with-where-unique-without-language.input';
import { FoodSearchVectorUpdateManyWithWhereWithoutLanguageInput } from './food-search-vector-update-many-with-where-without-language.input';
import { FoodSearchVectorScalarWhereInput } from './food-search-vector-scalar-where.input';

@InputType()
export class FoodSearchVectorUncheckedUpdateManyWithoutLanguageNestedInput {

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

    @Field(() => [FoodSearchVectorUpdateWithWhereUniqueWithoutLanguageInput], {nullable:true})
    @Type(() => FoodSearchVectorUpdateWithWhereUniqueWithoutLanguageInput)
    update?: Array<FoodSearchVectorUpdateWithWhereUniqueWithoutLanguageInput>;

    @Field(() => [FoodSearchVectorUpdateManyWithWhereWithoutLanguageInput], {nullable:true})
    @Type(() => FoodSearchVectorUpdateManyWithWhereWithoutLanguageInput)
    updateMany?: Array<FoodSearchVectorUpdateManyWithWhereWithoutLanguageInput>;

    @Field(() => [FoodSearchVectorScalarWhereInput], {nullable:true})
    @Type(() => FoodSearchVectorScalarWhereInput)
    deleteMany?: Array<FoodSearchVectorScalarWhereInput>;
}
