import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandedFoodCreateManyInput } from './branded-food-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBrandedFoodArgs {

    @Field(() => [BrandedFoodCreateManyInput], {nullable:false})
    @Type(() => BrandedFoodCreateManyInput)
    data!: Array<BrandedFoodCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
