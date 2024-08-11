import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodPortionWhereInput } from './food-portion-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFoodPortionArgs {

    @Field(() => FoodPortionWhereInput, {nullable:true})
    @Type(() => FoodPortionWhereInput)
    where?: FoodPortionWhereInput;
}
