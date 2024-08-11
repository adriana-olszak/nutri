import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodSearchVectorScalarWhereInput } from './food-search-vector-scalar-where.input';
import { Type } from 'class-transformer';
import { FoodSearchVectorUpdateManyMutationInput } from './food-search-vector-update-many-mutation.input';

@InputType()
export class FoodSearchVectorUpdateManyWithWhereWithoutLanguageInput {

    @Field(() => FoodSearchVectorScalarWhereInput, {nullable:false})
    @Type(() => FoodSearchVectorScalarWhereInput)
    where!: FoodSearchVectorScalarWhereInput;

    @Field(() => FoodSearchVectorUpdateManyMutationInput, {nullable:false})
    @Type(() => FoodSearchVectorUpdateManyMutationInput)
    data!: FoodSearchVectorUpdateManyMutationInput;
}
