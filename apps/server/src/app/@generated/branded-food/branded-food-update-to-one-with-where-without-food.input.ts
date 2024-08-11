import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandedFoodWhereInput } from './branded-food-where.input';
import { Type } from 'class-transformer';
import { BrandedFoodUpdateWithoutFoodInput } from './branded-food-update-without-food.input';

@InputType()
export class BrandedFoodUpdateToOneWithWhereWithoutFoodInput {

    @Field(() => BrandedFoodWhereInput, {nullable:true})
    @Type(() => BrandedFoodWhereInput)
    where?: BrandedFoodWhereInput;

    @Field(() => BrandedFoodUpdateWithoutFoodInput, {nullable:false})
    @Type(() => BrandedFoodUpdateWithoutFoodInput)
    data!: BrandedFoodUpdateWithoutFoodInput;
}
