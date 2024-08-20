import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class NutritionLabel {
    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Float, {nullable:true})
    calories!: number | null;

    @Field(() => Float, {nullable:true})
    totalFat!: number | null;

    @Field(() => Float, {nullable:true})
    saturatedFat!: number | null;

    @Field(() => Float, {nullable:true})
    transFat!: number | null;

    @Field(() => Float, {nullable:true})
    cholesterol!: number | null;

    @Field(() => Float, {nullable:true})
    sodium!: number | null;

    @Field(() => Float, {nullable:true})
    totalCarbohydrate!: number | null;

    @Field(() => Float, {nullable:true})
    dietaryFiber!: number | null;

    @Field(() => Float, {nullable:true})
    totalSugars!: number | null;

    @Field(() => Float, {nullable:true})
    addedSugars!: number | null;

    @Field(() => Float, {nullable:true})
    protein!: number | null;

    @Field(() => Float, {nullable:true})
    vitaminA!: number | null;

    @Field(() => Float, {nullable:true})
    vitaminC!: number | null;

    @Field(() => Float, {nullable:true})
    vitaminD!: number | null;

    @Field(() => Float, {nullable:true})
    calcium!: number | null;

    @Field(() => Float, {nullable:true})
    iron!: number | null;

    @Field(() => Float, {nullable:true})
    potassium!: number | null;

    @Field(() => Float, {nullable:true})
    servingsPerContainer!: number | null;

    @Field(() => String, {nullable:true})
    householdServingFullText!: string | null;
}
