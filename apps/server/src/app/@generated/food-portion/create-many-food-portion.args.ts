import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodPortionCreateManyInput } from './food-portion-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFoodPortionArgs {

    @Field(() => [FoodPortionCreateManyInput], {nullable:false})
    @Type(() => FoodPortionCreateManyInput)
    data!: Array<FoodPortionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
