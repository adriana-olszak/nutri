import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodPortionCreateInput } from './food-portion-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFoodPortionArgs {

    @Field(() => FoodPortionCreateInput, {nullable:false})
    @Type(() => FoodPortionCreateInput)
    data!: FoodPortionCreateInput;
}
