import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoCreateWithoutFoodPortionsInput } from './import-info-create-without-food-portions.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateOrConnectWithoutFoodPortionsInput } from './import-info-create-or-connect-without-food-portions.input';
import { ImportInfoUpsertWithoutFoodPortionsInput } from './import-info-upsert-without-food-portions.input';
import { Prisma } from '@prisma/client';
import { ImportInfoWhereUniqueInput } from './import-info-where-unique.input';
import { ImportInfoUpdateToOneWithWhereWithoutFoodPortionsInput } from './import-info-update-to-one-with-where-without-food-portions.input';

@InputType()
export class ImportInfoUpdateOneRequiredWithoutFoodPortionsNestedInput {

    @Field(() => ImportInfoCreateWithoutFoodPortionsInput, {nullable:true})
    @Type(() => ImportInfoCreateWithoutFoodPortionsInput)
    create?: ImportInfoCreateWithoutFoodPortionsInput;

    @Field(() => ImportInfoCreateOrConnectWithoutFoodPortionsInput, {nullable:true})
    @Type(() => ImportInfoCreateOrConnectWithoutFoodPortionsInput)
    connectOrCreate?: ImportInfoCreateOrConnectWithoutFoodPortionsInput;

    @Field(() => ImportInfoUpsertWithoutFoodPortionsInput, {nullable:true})
    @Type(() => ImportInfoUpsertWithoutFoodPortionsInput)
    upsert?: ImportInfoUpsertWithoutFoodPortionsInput;

    @Field(() => ImportInfoWhereUniqueInput, {nullable:true})
    @Type(() => ImportInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<ImportInfoWhereUniqueInput, 'id' | 'dataSource_sourceVersion'>;

    @Field(() => ImportInfoUpdateToOneWithWhereWithoutFoodPortionsInput, {nullable:true})
    @Type(() => ImportInfoUpdateToOneWithWhereWithoutFoodPortionsInput)
    update?: ImportInfoUpdateToOneWithWhereWithoutFoodPortionsInput;
}
