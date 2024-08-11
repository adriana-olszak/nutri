import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodPortionScalarWhereInput } from './food-portion-scalar-where.input';
import { Type } from 'class-transformer';
import { FoodPortionUpdateManyMutationInput } from './food-portion-update-many-mutation.input';

@InputType()
export class FoodPortionUpdateManyWithWhereWithoutMeasureUnitInput {

    @Field(() => FoodPortionScalarWhereInput, {nullable:false})
    @Type(() => FoodPortionScalarWhereInput)
    where!: FoodPortionScalarWhereInput;

    @Field(() => FoodPortionUpdateManyMutationInput, {nullable:false})
    @Type(() => FoodPortionUpdateManyMutationInput)
    data!: FoodPortionUpdateManyMutationInput;
}
