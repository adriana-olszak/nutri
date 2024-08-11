import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodSearchVectorWhereInput } from './food-search-vector-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFoodSearchVectorArgs {

    @Field(() => FoodSearchVectorWhereInput, {nullable:true})
    @Type(() => FoodSearchVectorWhereInput)
    where?: FoodSearchVectorWhereInput;
}
