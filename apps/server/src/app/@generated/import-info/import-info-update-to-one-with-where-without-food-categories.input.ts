import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoWhereInput } from './import-info-where.input';
import { Type } from 'class-transformer';
import { ImportInfoUpdateWithoutFoodCategoriesInput } from './import-info-update-without-food-categories.input';

@InputType()
export class ImportInfoUpdateToOneWithWhereWithoutFoodCategoriesInput {

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    where?: ImportInfoWhereInput;

    @Field(() => ImportInfoUpdateWithoutFoodCategoriesInput, {nullable:false})
    @Type(() => ImportInfoUpdateWithoutFoodCategoriesInput)
    data!: ImportInfoUpdateWithoutFoodCategoriesInput;
}
