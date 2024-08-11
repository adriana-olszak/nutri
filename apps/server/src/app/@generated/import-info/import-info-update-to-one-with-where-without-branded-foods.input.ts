import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoWhereInput } from './import-info-where.input';
import { Type } from 'class-transformer';
import { ImportInfoUpdateWithoutBrandedFoodsInput } from './import-info-update-without-branded-foods.input';

@InputType()
export class ImportInfoUpdateToOneWithWhereWithoutBrandedFoodsInput {

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    where?: ImportInfoWhereInput;

    @Field(() => ImportInfoUpdateWithoutBrandedFoodsInput, {nullable:false})
    @Type(() => ImportInfoUpdateWithoutBrandedFoodsInput)
    data!: ImportInfoUpdateWithoutBrandedFoodsInput;
}
