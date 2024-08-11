import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImportInfoWhereUniqueInput } from './import-info-where-unique.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateWithoutFoodCategoriesInput } from './import-info-create-without-food-categories.input';

@InputType()
export class ImportInfoCreateOrConnectWithoutFoodCategoriesInput {

    @Field(() => ImportInfoWhereUniqueInput, {nullable:false})
    @Type(() => ImportInfoWhereUniqueInput)
    where!: Prisma.AtLeast<ImportInfoWhereUniqueInput, 'id' | 'dataSource_sourceVersion'>;

    @Field(() => ImportInfoCreateWithoutFoodCategoriesInput, {nullable:false})
    @Type(() => ImportInfoCreateWithoutFoodCategoriesInput)
    create!: ImportInfoCreateWithoutFoodCategoriesInput;
}
