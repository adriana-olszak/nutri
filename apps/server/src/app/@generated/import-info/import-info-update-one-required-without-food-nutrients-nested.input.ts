import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoCreateWithoutFoodNutrientsInput } from './import-info-create-without-food-nutrients.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateOrConnectWithoutFoodNutrientsInput } from './import-info-create-or-connect-without-food-nutrients.input';
import { ImportInfoUpsertWithoutFoodNutrientsInput } from './import-info-upsert-without-food-nutrients.input';
import { Prisma } from '@prisma/client';
import { ImportInfoWhereUniqueInput } from './import-info-where-unique.input';
import { ImportInfoUpdateToOneWithWhereWithoutFoodNutrientsInput } from './import-info-update-to-one-with-where-without-food-nutrients.input';

@InputType()
export class ImportInfoUpdateOneRequiredWithoutFoodNutrientsNestedInput {

    @Field(() => ImportInfoCreateWithoutFoodNutrientsInput, {nullable:true})
    @Type(() => ImportInfoCreateWithoutFoodNutrientsInput)
    create?: ImportInfoCreateWithoutFoodNutrientsInput;

    @Field(() => ImportInfoCreateOrConnectWithoutFoodNutrientsInput, {nullable:true})
    @Type(() => ImportInfoCreateOrConnectWithoutFoodNutrientsInput)
    connectOrCreate?: ImportInfoCreateOrConnectWithoutFoodNutrientsInput;

    @Field(() => ImportInfoUpsertWithoutFoodNutrientsInput, {nullable:true})
    @Type(() => ImportInfoUpsertWithoutFoodNutrientsInput)
    upsert?: ImportInfoUpsertWithoutFoodNutrientsInput;

    @Field(() => ImportInfoWhereUniqueInput, {nullable:true})
    @Type(() => ImportInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<ImportInfoWhereUniqueInput, 'id' | 'dataSource_sourceVersion'>;

    @Field(() => ImportInfoUpdateToOneWithWhereWithoutFoodNutrientsInput, {nullable:true})
    @Type(() => ImportInfoUpdateToOneWithWhereWithoutFoodNutrientsInput)
    update?: ImportInfoUpdateToOneWithWhereWithoutFoodNutrientsInput;
}
