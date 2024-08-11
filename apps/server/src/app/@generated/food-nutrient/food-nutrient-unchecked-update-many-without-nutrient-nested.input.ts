import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodNutrientCreateWithoutNutrientInput } from './food-nutrient-create-without-nutrient.input';
import { Type } from 'class-transformer';
import { FoodNutrientCreateOrConnectWithoutNutrientInput } from './food-nutrient-create-or-connect-without-nutrient.input';
import { FoodNutrientUpsertWithWhereUniqueWithoutNutrientInput } from './food-nutrient-upsert-with-where-unique-without-nutrient.input';
import { FoodNutrientCreateManyNutrientInputEnvelope } from './food-nutrient-create-many-nutrient-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodNutrientWhereUniqueInput } from './food-nutrient-where-unique.input';
import { FoodNutrientUpdateWithWhereUniqueWithoutNutrientInput } from './food-nutrient-update-with-where-unique-without-nutrient.input';
import { FoodNutrientUpdateManyWithWhereWithoutNutrientInput } from './food-nutrient-update-many-with-where-without-nutrient.input';
import { FoodNutrientScalarWhereInput } from './food-nutrient-scalar-where.input';

@InputType()
export class FoodNutrientUncheckedUpdateManyWithoutNutrientNestedInput {

    @Field(() => [FoodNutrientCreateWithoutNutrientInput], {nullable:true})
    @Type(() => FoodNutrientCreateWithoutNutrientInput)
    create?: Array<FoodNutrientCreateWithoutNutrientInput>;

    @Field(() => [FoodNutrientCreateOrConnectWithoutNutrientInput], {nullable:true})
    @Type(() => FoodNutrientCreateOrConnectWithoutNutrientInput)
    connectOrCreate?: Array<FoodNutrientCreateOrConnectWithoutNutrientInput>;

    @Field(() => [FoodNutrientUpsertWithWhereUniqueWithoutNutrientInput], {nullable:true})
    @Type(() => FoodNutrientUpsertWithWhereUniqueWithoutNutrientInput)
    upsert?: Array<FoodNutrientUpsertWithWhereUniqueWithoutNutrientInput>;

    @Field(() => FoodNutrientCreateManyNutrientInputEnvelope, {nullable:true})
    @Type(() => FoodNutrientCreateManyNutrientInputEnvelope)
    createMany?: FoodNutrientCreateManyNutrientInputEnvelope;

    @Field(() => [FoodNutrientWhereUniqueInput], {nullable:true})
    @Type(() => FoodNutrientWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>>;

    @Field(() => [FoodNutrientWhereUniqueInput], {nullable:true})
    @Type(() => FoodNutrientWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>>;

    @Field(() => [FoodNutrientWhereUniqueInput], {nullable:true})
    @Type(() => FoodNutrientWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>>;

    @Field(() => [FoodNutrientWhereUniqueInput], {nullable:true})
    @Type(() => FoodNutrientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>>;

    @Field(() => [FoodNutrientUpdateWithWhereUniqueWithoutNutrientInput], {nullable:true})
    @Type(() => FoodNutrientUpdateWithWhereUniqueWithoutNutrientInput)
    update?: Array<FoodNutrientUpdateWithWhereUniqueWithoutNutrientInput>;

    @Field(() => [FoodNutrientUpdateManyWithWhereWithoutNutrientInput], {nullable:true})
    @Type(() => FoodNutrientUpdateManyWithWhereWithoutNutrientInput)
    updateMany?: Array<FoodNutrientUpdateManyWithWhereWithoutNutrientInput>;

    @Field(() => [FoodNutrientScalarWhereInput], {nullable:true})
    @Type(() => FoodNutrientScalarWhereInput)
    deleteMany?: Array<FoodNutrientScalarWhereInput>;
}
