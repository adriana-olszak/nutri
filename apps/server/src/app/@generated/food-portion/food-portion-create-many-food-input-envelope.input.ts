import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodPortionCreateManyFoodInput } from './food-portion-create-many-food.input';
import { Type } from 'class-transformer';

@InputType()
export class FoodPortionCreateManyFoodInputEnvelope {

    @Field(() => [FoodPortionCreateManyFoodInput], {nullable:false})
    @Type(() => FoodPortionCreateManyFoodInput)
    data!: Array<FoodPortionCreateManyFoodInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
