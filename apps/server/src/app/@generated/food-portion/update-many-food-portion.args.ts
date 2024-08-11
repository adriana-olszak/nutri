import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodPortionUpdateManyMutationInput } from './food-portion-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FoodPortionWhereInput } from './food-portion-where.input';

@ArgsType()
export class UpdateManyFoodPortionArgs {

    @Field(() => FoodPortionUpdateManyMutationInput, {nullable:false})
    @Type(() => FoodPortionUpdateManyMutationInput)
    data!: FoodPortionUpdateManyMutationInput;

    @Field(() => FoodPortionWhereInput, {nullable:true})
    @Type(() => FoodPortionWhereInput)
    where?: FoodPortionWhereInput;
}
