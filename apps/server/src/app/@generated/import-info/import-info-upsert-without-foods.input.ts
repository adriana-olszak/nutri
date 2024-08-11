import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoUpdateWithoutFoodsInput } from './import-info-update-without-foods.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateWithoutFoodsInput } from './import-info-create-without-foods.input';
import { ImportInfoWhereInput } from './import-info-where.input';

@InputType()
export class ImportInfoUpsertWithoutFoodsInput {

    @Field(() => ImportInfoUpdateWithoutFoodsInput, {nullable:false})
    @Type(() => ImportInfoUpdateWithoutFoodsInput)
    update!: ImportInfoUpdateWithoutFoodsInput;

    @Field(() => ImportInfoCreateWithoutFoodsInput, {nullable:false})
    @Type(() => ImportInfoCreateWithoutFoodsInput)
    create!: ImportInfoCreateWithoutFoodsInput;

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    where?: ImportInfoWhereInput;
}
