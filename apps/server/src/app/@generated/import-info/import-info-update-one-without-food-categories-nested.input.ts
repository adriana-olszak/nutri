import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoCreateWithoutFoodCategoriesInput } from './import-info-create-without-food-categories.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateOrConnectWithoutFoodCategoriesInput } from './import-info-create-or-connect-without-food-categories.input';
import { ImportInfoUpsertWithoutFoodCategoriesInput } from './import-info-upsert-without-food-categories.input';
import { ImportInfoWhereInput } from './import-info-where.input';
import { Prisma } from '@prisma/client';
import { ImportInfoWhereUniqueInput } from './import-info-where-unique.input';
import { ImportInfoUpdateToOneWithWhereWithoutFoodCategoriesInput } from './import-info-update-to-one-with-where-without-food-categories.input';

@InputType()
export class ImportInfoUpdateOneWithoutFoodCategoriesNestedInput {

    @Field(() => ImportInfoCreateWithoutFoodCategoriesInput, {nullable:true})
    @Type(() => ImportInfoCreateWithoutFoodCategoriesInput)
    create?: ImportInfoCreateWithoutFoodCategoriesInput;

    @Field(() => ImportInfoCreateOrConnectWithoutFoodCategoriesInput, {nullable:true})
    @Type(() => ImportInfoCreateOrConnectWithoutFoodCategoriesInput)
    connectOrCreate?: ImportInfoCreateOrConnectWithoutFoodCategoriesInput;

    @Field(() => ImportInfoUpsertWithoutFoodCategoriesInput, {nullable:true})
    @Type(() => ImportInfoUpsertWithoutFoodCategoriesInput)
    upsert?: ImportInfoUpsertWithoutFoodCategoriesInput;

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    disconnect?: ImportInfoWhereInput;

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    delete?: ImportInfoWhereInput;

    @Field(() => ImportInfoWhereUniqueInput, {nullable:true})
    @Type(() => ImportInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<ImportInfoWhereUniqueInput, 'id' | 'dataSource_sourceVersion'>;

    @Field(() => ImportInfoUpdateToOneWithWhereWithoutFoodCategoriesInput, {nullable:true})
    @Type(() => ImportInfoUpdateToOneWithWhereWithoutFoodCategoriesInput)
    update?: ImportInfoUpdateToOneWithWhereWithoutFoodCategoriesInput;
}
