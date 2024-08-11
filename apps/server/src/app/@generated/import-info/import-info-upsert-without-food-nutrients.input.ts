import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoUpdateWithoutFoodNutrientsInput } from './import-info-update-without-food-nutrients.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateWithoutFoodNutrientsInput } from './import-info-create-without-food-nutrients.input';
import { ImportInfoWhereInput } from './import-info-where.input';

@InputType()
export class ImportInfoUpsertWithoutFoodNutrientsInput {

    @Field(() => ImportInfoUpdateWithoutFoodNutrientsInput, {nullable:false})
    @Type(() => ImportInfoUpdateWithoutFoodNutrientsInput)
    update!: ImportInfoUpdateWithoutFoodNutrientsInput;

    @Field(() => ImportInfoCreateWithoutFoodNutrientsInput, {nullable:false})
    @Type(() => ImportInfoCreateWithoutFoodNutrientsInput)
    create!: ImportInfoCreateWithoutFoodNutrientsInput;

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    where?: ImportInfoWhereInput;
}
