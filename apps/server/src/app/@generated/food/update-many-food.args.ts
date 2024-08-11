import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodUpdateManyMutationInput } from './food-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FoodWhereInput } from './food-where.input';

@ArgsType()
export class UpdateManyFoodArgs {

    @Field(() => FoodUpdateManyMutationInput, {nullable:false})
    @Type(() => FoodUpdateManyMutationInput)
    data!: FoodUpdateManyMutationInput;

    @Field(() => FoodWhereInput, {nullable:true})
    @Type(() => FoodWhereInput)
    where?: FoodWhereInput;
}
