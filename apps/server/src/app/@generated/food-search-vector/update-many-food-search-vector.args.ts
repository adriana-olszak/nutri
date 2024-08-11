import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodSearchVectorUpdateManyMutationInput } from './food-search-vector-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FoodSearchVectorWhereInput } from './food-search-vector-where.input';

@ArgsType()
export class UpdateManyFoodSearchVectorArgs {

    @Field(() => FoodSearchVectorUpdateManyMutationInput, {nullable:false})
    @Type(() => FoodSearchVectorUpdateManyMutationInput)
    data!: FoodSearchVectorUpdateManyMutationInput;

    @Field(() => FoodSearchVectorWhereInput, {nullable:true})
    @Type(() => FoodSearchVectorWhereInput)
    where?: FoodSearchVectorWhereInput;
}
