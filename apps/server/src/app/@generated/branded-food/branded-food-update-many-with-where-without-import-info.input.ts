import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandedFoodScalarWhereInput } from './branded-food-scalar-where.input';
import { Type } from 'class-transformer';
import { BrandedFoodUpdateManyMutationInput } from './branded-food-update-many-mutation.input';

@InputType()
export class BrandedFoodUpdateManyWithWhereWithoutImportInfoInput {

    @Field(() => BrandedFoodScalarWhereInput, {nullable:false})
    @Type(() => BrandedFoodScalarWhereInput)
    where!: BrandedFoodScalarWhereInput;

    @Field(() => BrandedFoodUpdateManyMutationInput, {nullable:false})
    @Type(() => BrandedFoodUpdateManyMutationInput)
    data!: BrandedFoodUpdateManyMutationInput;
}
