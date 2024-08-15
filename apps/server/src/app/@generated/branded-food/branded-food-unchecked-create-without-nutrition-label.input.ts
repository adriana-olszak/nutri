import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class BrandedFoodUncheckedCreateWithoutNutritionLabelInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    foodId!: string;

    @Field(() => String, {nullable:false})
    brandOwner!: string;

    @Field(() => String, {nullable:true})
    gtinUpc?: string;

    @Field(() => String, {nullable:true})
    ingredients?: string;

    @Field(() => Float, {nullable:true})
    servingSize?: number;

    @Field(() => String, {nullable:true})
    servingUnit?: string;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => String, {nullable:false})
    importInfoId!: string;
}
