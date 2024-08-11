import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodUpdateWithoutPortionsInput } from './food-update-without-portions.input';
import { Type } from 'class-transformer';
import { FoodCreateWithoutPortionsInput } from './food-create-without-portions.input';
import { FoodWhereInput } from './food-where.input';

@InputType()
export class FoodUpsertWithoutPortionsInput {

    @Field(() => FoodUpdateWithoutPortionsInput, {nullable:false})
    @Type(() => FoodUpdateWithoutPortionsInput)
    update!: FoodUpdateWithoutPortionsInput;

    @Field(() => FoodCreateWithoutPortionsInput, {nullable:false})
    @Type(() => FoodCreateWithoutPortionsInput)
    create!: FoodCreateWithoutPortionsInput;

    @Field(() => FoodWhereInput, {nullable:true})
    @Type(() => FoodWhereInput)
    where?: FoodWhereInput;
}
