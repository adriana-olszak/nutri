import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Food } from '../food/food.model';
import { Language } from '../language/language.model';

@ObjectType()
export class FoodSearchVector {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    foodId!: string;

    @Field(() => String, {nullable:false})
    languageCode!: string;

    @Field(() => Food, {nullable:false})
    food?: Food;

    @Field(() => Language, {nullable:false})
    language?: Language;
}
