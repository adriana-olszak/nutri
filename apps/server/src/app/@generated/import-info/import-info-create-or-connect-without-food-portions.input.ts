import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImportInfoWhereUniqueInput } from './import-info-where-unique.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateWithoutFoodPortionsInput } from './import-info-create-without-food-portions.input';

@InputType()
export class ImportInfoCreateOrConnectWithoutFoodPortionsInput {

    @Field(() => ImportInfoWhereUniqueInput, {nullable:false})
    @Type(() => ImportInfoWhereUniqueInput)
    where!: Prisma.AtLeast<ImportInfoWhereUniqueInput, 'id' | 'dataSource_sourceVersion'>;

    @Field(() => ImportInfoCreateWithoutFoodPortionsInput, {nullable:false})
    @Type(() => ImportInfoCreateWithoutFoodPortionsInput)
    create!: ImportInfoCreateWithoutFoodPortionsInput;
}
