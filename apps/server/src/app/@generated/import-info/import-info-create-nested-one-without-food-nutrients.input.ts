import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoCreateWithoutFoodNutrientsInput } from './import-info-create-without-food-nutrients.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateOrConnectWithoutFoodNutrientsInput } from './import-info-create-or-connect-without-food-nutrients.input';
import { Prisma } from '@prisma/client';
import { ImportInfoWhereUniqueInput } from './import-info-where-unique.input';

@InputType()
export class ImportInfoCreateNestedOneWithoutFoodNutrientsInput {

    @Field(() => ImportInfoCreateWithoutFoodNutrientsInput, {nullable:true})
    @Type(() => ImportInfoCreateWithoutFoodNutrientsInput)
    create?: ImportInfoCreateWithoutFoodNutrientsInput;

    @Field(() => ImportInfoCreateOrConnectWithoutFoodNutrientsInput, {nullable:true})
    @Type(() => ImportInfoCreateOrConnectWithoutFoodNutrientsInput)
    connectOrCreate?: ImportInfoCreateOrConnectWithoutFoodNutrientsInput;

    @Field(() => ImportInfoWhereUniqueInput, {nullable:true})
    @Type(() => ImportInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<ImportInfoWhereUniqueInput, 'id' | 'dataSource_sourceVersion'>;
}
