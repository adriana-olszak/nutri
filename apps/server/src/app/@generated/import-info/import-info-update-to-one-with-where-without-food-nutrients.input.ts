import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoWhereInput } from './import-info-where.input';
import { Type } from 'class-transformer';
import { ImportInfoUpdateWithoutFoodNutrientsInput } from './import-info-update-without-food-nutrients.input';

@InputType()
export class ImportInfoUpdateToOneWithWhereWithoutFoodNutrientsInput {

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    where?: ImportInfoWhereInput;

    @Field(() => ImportInfoUpdateWithoutFoodNutrientsInput, {nullable:false})
    @Type(() => ImportInfoUpdateWithoutFoodNutrientsInput)
    data!: ImportInfoUpdateWithoutFoodNutrientsInput;
}
