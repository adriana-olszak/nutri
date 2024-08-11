import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoWhereInput } from './import-info-where.input';
import { Type } from 'class-transformer';
import { ImportInfoUpdateWithoutFoodPortionsInput } from './import-info-update-without-food-portions.input';

@InputType()
export class ImportInfoUpdateToOneWithWhereWithoutFoodPortionsInput {

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    where?: ImportInfoWhereInput;

    @Field(() => ImportInfoUpdateWithoutFoodPortionsInput, {nullable:false})
    @Type(() => ImportInfoUpdateWithoutFoodPortionsInput)
    data!: ImportInfoUpdateWithoutFoodPortionsInput;
}
