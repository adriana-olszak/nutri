import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodCreateInput } from './food-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFoodArgs {

    @Field(() => FoodCreateInput, {nullable:false})
    @Type(() => FoodCreateInput)
    data!: FoodCreateInput;
}
