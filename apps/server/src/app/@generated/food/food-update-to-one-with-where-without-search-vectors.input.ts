import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodWhereInput } from './food-where.input';
import { Type } from 'class-transformer';
import { FoodUpdateWithoutSearchVectorsInput } from './food-update-without-search-vectors.input';

@InputType()
export class FoodUpdateToOneWithWhereWithoutSearchVectorsInput {

    @Field(() => FoodWhereInput, {nullable:true})
    @Type(() => FoodWhereInput)
    where?: FoodWhereInput;

    @Field(() => FoodUpdateWithoutSearchVectorsInput, {nullable:false})
    @Type(() => FoodUpdateWithoutSearchVectorsInput)
    data!: FoodUpdateWithoutSearchVectorsInput;
}
