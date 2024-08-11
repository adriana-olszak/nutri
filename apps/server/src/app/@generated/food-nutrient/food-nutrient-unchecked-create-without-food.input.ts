import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class FoodNutrientUncheckedCreateWithoutFoodInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    nutrientId!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:true})
    min?: number;

    @Field(() => Float, {nullable:true})
    median?: number;

    @Field(() => Float, {nullable:true})
    max?: number;

    @Field(() => String, {nullable:true})
    confidenceCode?: string;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => String, {nullable:false})
    importInfoId!: string;
}
