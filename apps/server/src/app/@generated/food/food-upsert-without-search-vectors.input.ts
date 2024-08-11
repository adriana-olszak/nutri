import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodUpdateWithoutSearchVectorsInput } from './food-update-without-search-vectors.input';
import { Type } from 'class-transformer';
import { FoodCreateWithoutSearchVectorsInput } from './food-create-without-search-vectors.input';
import { FoodWhereInput } from './food-where.input';

@InputType()
export class FoodUpsertWithoutSearchVectorsInput {

    @Field(() => FoodUpdateWithoutSearchVectorsInput, {nullable:false})
    @Type(() => FoodUpdateWithoutSearchVectorsInput)
    update!: FoodUpdateWithoutSearchVectorsInput;

    @Field(() => FoodCreateWithoutSearchVectorsInput, {nullable:false})
    @Type(() => FoodCreateWithoutSearchVectorsInput)
    create!: FoodCreateWithoutSearchVectorsInput;

    @Field(() => FoodWhereInput, {nullable:true})
    @Type(() => FoodWhereInput)
    where?: FoodWhereInput;
}
