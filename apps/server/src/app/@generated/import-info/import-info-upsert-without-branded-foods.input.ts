import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoUpdateWithoutBrandedFoodsInput } from './import-info-update-without-branded-foods.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateWithoutBrandedFoodsInput } from './import-info-create-without-branded-foods.input';
import { ImportInfoWhereInput } from './import-info-where.input';

@InputType()
export class ImportInfoUpsertWithoutBrandedFoodsInput {

    @Field(() => ImportInfoUpdateWithoutBrandedFoodsInput, {nullable:false})
    @Type(() => ImportInfoUpdateWithoutBrandedFoodsInput)
    update!: ImportInfoUpdateWithoutBrandedFoodsInput;

    @Field(() => ImportInfoCreateWithoutBrandedFoodsInput, {nullable:false})
    @Type(() => ImportInfoCreateWithoutBrandedFoodsInput)
    create!: ImportInfoCreateWithoutBrandedFoodsInput;

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    where?: ImportInfoWhereInput;
}
