import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandedFoodWhereInput } from './branded-food-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBrandedFoodArgs {

    @Field(() => BrandedFoodWhereInput, {nullable:true})
    @Type(() => BrandedFoodWhereInput)
    where?: BrandedFoodWhereInput;
}
