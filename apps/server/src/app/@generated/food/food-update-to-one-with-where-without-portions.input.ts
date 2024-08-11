import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodWhereInput } from './food-where.input';
import { Type } from 'class-transformer';
import { FoodUpdateWithoutPortionsInput } from './food-update-without-portions.input';

@InputType()
export class FoodUpdateToOneWithWhereWithoutPortionsInput {

    @Field(() => FoodWhereInput, {nullable:true})
    @Type(() => FoodWhereInput)
    where?: FoodWhereInput;

    @Field(() => FoodUpdateWithoutPortionsInput, {nullable:false})
    @Type(() => FoodUpdateWithoutPortionsInput)
    data!: FoodUpdateWithoutPortionsInput;
}
