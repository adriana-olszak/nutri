import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoUpdateWithoutFoodCategoriesInput } from './import-info-update-without-food-categories.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateWithoutFoodCategoriesInput } from './import-info-create-without-food-categories.input';
import { ImportInfoWhereInput } from './import-info-where.input';

@InputType()
export class ImportInfoUpsertWithoutFoodCategoriesInput {

    @Field(() => ImportInfoUpdateWithoutFoodCategoriesInput, {nullable:false})
    @Type(() => ImportInfoUpdateWithoutFoodCategoriesInput)
    update!: ImportInfoUpdateWithoutFoodCategoriesInput;

    @Field(() => ImportInfoCreateWithoutFoodCategoriesInput, {nullable:false})
    @Type(() => ImportInfoCreateWithoutFoodCategoriesInput)
    create!: ImportInfoCreateWithoutFoodCategoriesInput;

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    where?: ImportInfoWhereInput;
}
