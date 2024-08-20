import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { NutritionLabel } from './nutrition-label.model';

@ObjectType()
export class BrandedFood {
    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    brandOwner!: string;

    @Field(() => String, {nullable:true})
    gtinUpc!: string | null;

    @Field(() => String, {nullable:true})
    ingredientsLabel!: string | null;

    @Field(() => Float, {nullable:true})
    servingSize!: number | null;

    @Field(() => String, {nullable:true})
    servingUnit!: string | null;

    @Field(() => NutritionLabel, {nullable:true})
    nutritionLabel?: NutritionLabel | null;
}
