import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoWhereInput } from './import-info-where.input';
import { Type } from 'class-transformer';
import { ImportInfoUpdateWithoutFoodsInput } from './import-info-update-without-foods.input';

@InputType()
export class ImportInfoUpdateToOneWithWhereWithoutFoodsInput {

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    where?: ImportInfoWhereInput;

    @Field(() => ImportInfoUpdateWithoutFoodsInput, {nullable:false})
    @Type(() => ImportInfoUpdateWithoutFoodsInput)
    data!: ImportInfoUpdateWithoutFoodsInput;
}
