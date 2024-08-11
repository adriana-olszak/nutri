import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImportInfoWhereUniqueInput } from './import-info-where-unique.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateWithoutFoodNutrientsInput } from './import-info-create-without-food-nutrients.input';

@InputType()
export class ImportInfoCreateOrConnectWithoutFoodNutrientsInput {

    @Field(() => ImportInfoWhereUniqueInput, {nullable:false})
    @Type(() => ImportInfoWhereUniqueInput)
    where!: Prisma.AtLeast<ImportInfoWhereUniqueInput, 'id' | 'dataSource_sourceVersion'>;

    @Field(() => ImportInfoCreateWithoutFoodNutrientsInput, {nullable:false})
    @Type(() => ImportInfoCreateWithoutFoodNutrientsInput)
    create!: ImportInfoCreateWithoutFoodNutrientsInput;
}
