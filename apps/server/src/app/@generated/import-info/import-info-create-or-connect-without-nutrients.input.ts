import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImportInfoWhereUniqueInput } from './import-info-where-unique.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateWithoutNutrientsInput } from './import-info-create-without-nutrients.input';

@InputType()
export class ImportInfoCreateOrConnectWithoutNutrientsInput {

    @Field(() => ImportInfoWhereUniqueInput, {nullable:false})
    @Type(() => ImportInfoWhereUniqueInput)
    where!: Prisma.AtLeast<ImportInfoWhereUniqueInput, 'id' | 'dataSource_sourceVersion'>;

    @Field(() => ImportInfoCreateWithoutNutrientsInput, {nullable:false})
    @Type(() => ImportInfoCreateWithoutNutrientsInput)
    create!: ImportInfoCreateWithoutNutrientsInput;
}
