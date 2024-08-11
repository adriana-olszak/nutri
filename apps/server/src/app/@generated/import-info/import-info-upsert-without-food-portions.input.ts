import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoUpdateWithoutFoodPortionsInput } from './import-info-update-without-food-portions.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateWithoutFoodPortionsInput } from './import-info-create-without-food-portions.input';
import { ImportInfoWhereInput } from './import-info-where.input';

@InputType()
export class ImportInfoUpsertWithoutFoodPortionsInput {

    @Field(() => ImportInfoUpdateWithoutFoodPortionsInput, {nullable:false})
    @Type(() => ImportInfoUpdateWithoutFoodPortionsInput)
    update!: ImportInfoUpdateWithoutFoodPortionsInput;

    @Field(() => ImportInfoCreateWithoutFoodPortionsInput, {nullable:false})
    @Type(() => ImportInfoCreateWithoutFoodPortionsInput)
    create!: ImportInfoCreateWithoutFoodPortionsInput;

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    where?: ImportInfoWhereInput;
}
