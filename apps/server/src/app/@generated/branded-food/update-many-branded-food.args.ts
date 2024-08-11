import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandedFoodUpdateManyMutationInput } from './branded-food-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BrandedFoodWhereInput } from './branded-food-where.input';

@ArgsType()
export class UpdateManyBrandedFoodArgs {

    @Field(() => BrandedFoodUpdateManyMutationInput, {nullable:false})
    @Type(() => BrandedFoodUpdateManyMutationInput)
    data!: BrandedFoodUpdateManyMutationInput;

    @Field(() => BrandedFoodWhereInput, {nullable:true})
    @Type(() => BrandedFoodWhereInput)
    where?: BrandedFoodWhereInput;
}
