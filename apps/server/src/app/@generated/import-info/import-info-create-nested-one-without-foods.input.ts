import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoCreateWithoutFoodsInput } from './import-info-create-without-foods.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateOrConnectWithoutFoodsInput } from './import-info-create-or-connect-without-foods.input';
import { Prisma } from '@prisma/client';
import { ImportInfoWhereUniqueInput } from './import-info-where-unique.input';

@InputType()
export class ImportInfoCreateNestedOneWithoutFoodsInput {

    @Field(() => ImportInfoCreateWithoutFoodsInput, {nullable:true})
    @Type(() => ImportInfoCreateWithoutFoodsInput)
    create?: ImportInfoCreateWithoutFoodsInput;

    @Field(() => ImportInfoCreateOrConnectWithoutFoodsInput, {nullable:true})
    @Type(() => ImportInfoCreateOrConnectWithoutFoodsInput)
    connectOrCreate?: ImportInfoCreateOrConnectWithoutFoodsInput;

    @Field(() => ImportInfoWhereUniqueInput, {nullable:true})
    @Type(() => ImportInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<ImportInfoWhereUniqueInput, 'id' | 'dataSource_sourceVersion'>;
}
