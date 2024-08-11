import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoCreateWithoutNutrientsInput } from './import-info-create-without-nutrients.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateOrConnectWithoutNutrientsInput } from './import-info-create-or-connect-without-nutrients.input';
import { Prisma } from '@prisma/client';
import { ImportInfoWhereUniqueInput } from './import-info-where-unique.input';

@InputType()
export class ImportInfoCreateNestedOneWithoutNutrientsInput {

    @Field(() => ImportInfoCreateWithoutNutrientsInput, {nullable:true})
    @Type(() => ImportInfoCreateWithoutNutrientsInput)
    create?: ImportInfoCreateWithoutNutrientsInput;

    @Field(() => ImportInfoCreateOrConnectWithoutNutrientsInput, {nullable:true})
    @Type(() => ImportInfoCreateOrConnectWithoutNutrientsInput)
    connectOrCreate?: ImportInfoCreateOrConnectWithoutNutrientsInput;

    @Field(() => ImportInfoWhereUniqueInput, {nullable:true})
    @Type(() => ImportInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<ImportInfoWhereUniqueInput, 'id' | 'dataSource_sourceVersion'>;
}
