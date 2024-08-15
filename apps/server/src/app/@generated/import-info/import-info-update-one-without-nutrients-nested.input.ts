import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoCreateWithoutNutrientsInput } from './import-info-create-without-nutrients.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateOrConnectWithoutNutrientsInput } from './import-info-create-or-connect-without-nutrients.input';
import { ImportInfoUpsertWithoutNutrientsInput } from './import-info-upsert-without-nutrients.input';
import { ImportInfoWhereInput } from './import-info-where.input';
import { Prisma } from '@prisma/client';
import { ImportInfoWhereUniqueInput } from './import-info-where-unique.input';
import { ImportInfoUpdateToOneWithWhereWithoutNutrientsInput } from './import-info-update-to-one-with-where-without-nutrients.input';

@InputType()
export class ImportInfoUpdateOneWithoutNutrientsNestedInput {

    @Field(() => ImportInfoCreateWithoutNutrientsInput, {nullable:true})
    @Type(() => ImportInfoCreateWithoutNutrientsInput)
    create?: ImportInfoCreateWithoutNutrientsInput;

    @Field(() => ImportInfoCreateOrConnectWithoutNutrientsInput, {nullable:true})
    @Type(() => ImportInfoCreateOrConnectWithoutNutrientsInput)
    connectOrCreate?: ImportInfoCreateOrConnectWithoutNutrientsInput;

    @Field(() => ImportInfoUpsertWithoutNutrientsInput, {nullable:true})
    @Type(() => ImportInfoUpsertWithoutNutrientsInput)
    upsert?: ImportInfoUpsertWithoutNutrientsInput;

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    disconnect?: ImportInfoWhereInput;

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    delete?: ImportInfoWhereInput;

    @Field(() => ImportInfoWhereUniqueInput, {nullable:true})
    @Type(() => ImportInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<ImportInfoWhereUniqueInput, 'id' | 'dataSource_sourceVersion'>;

    @Field(() => ImportInfoUpdateToOneWithWhereWithoutNutrientsInput, {nullable:true})
    @Type(() => ImportInfoUpdateToOneWithWhereWithoutNutrientsInput)
    update?: ImportInfoUpdateToOneWithWhereWithoutNutrientsInput;
}
