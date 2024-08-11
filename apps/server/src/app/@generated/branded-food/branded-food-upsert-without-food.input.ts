import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandedFoodUpdateWithoutFoodInput } from './branded-food-update-without-food.input';
import { Type } from 'class-transformer';
import { BrandedFoodCreateWithoutFoodInput } from './branded-food-create-without-food.input';
import { BrandedFoodWhereInput } from './branded-food-where.input';

@InputType()
export class BrandedFoodUpsertWithoutFoodInput {

    @Field(() => BrandedFoodUpdateWithoutFoodInput, {nullable:false})
    @Type(() => BrandedFoodUpdateWithoutFoodInput)
    update!: BrandedFoodUpdateWithoutFoodInput;

    @Field(() => BrandedFoodCreateWithoutFoodInput, {nullable:false})
    @Type(() => BrandedFoodCreateWithoutFoodInput)
    create!: BrandedFoodCreateWithoutFoodInput;

    @Field(() => BrandedFoodWhereInput, {nullable:true})
    @Type(() => BrandedFoodWhereInput)
    where?: BrandedFoodWhereInput;
}
