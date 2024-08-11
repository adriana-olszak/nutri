import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImportInfoWhereUniqueInput } from './import-info-where-unique.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateWithoutFoodsInput } from './import-info-create-without-foods.input';

@InputType()
export class ImportInfoCreateOrConnectWithoutFoodsInput {

    @Field(() => ImportInfoWhereUniqueInput, {nullable:false})
    @Type(() => ImportInfoWhereUniqueInput)
    where!: Prisma.AtLeast<ImportInfoWhereUniqueInput, 'id' | 'dataSource_sourceVersion'>;

    @Field(() => ImportInfoCreateWithoutFoodsInput, {nullable:false})
    @Type(() => ImportInfoCreateWithoutFoodsInput)
    create!: ImportInfoCreateWithoutFoodsInput;
}
