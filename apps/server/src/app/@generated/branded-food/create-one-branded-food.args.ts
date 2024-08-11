import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandedFoodCreateInput } from './branded-food-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBrandedFoodArgs {

    @Field(() => BrandedFoodCreateInput, {nullable:false})
    @Type(() => BrandedFoodCreateInput)
    data!: BrandedFoodCreateInput;
}
