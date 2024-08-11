import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FoodRelationFilter } from '../food/food-relation-filter.input';
import { LanguageRelationFilter } from '../language/language-relation-filter.input';

@InputType()
export class FoodSearchVectorWhereInput {

    @Field(() => [FoodSearchVectorWhereInput], {nullable:true})
    AND?: Array<FoodSearchVectorWhereInput>;

    @Field(() => [FoodSearchVectorWhereInput], {nullable:true})
    OR?: Array<FoodSearchVectorWhereInput>;

    @Field(() => [FoodSearchVectorWhereInput], {nullable:true})
    NOT?: Array<FoodSearchVectorWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    foodId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    languageCode?: StringFilter;

    @Field(() => FoodRelationFilter, {nullable:true})
    food?: FoodRelationFilter;

    @Field(() => LanguageRelationFilter, {nullable:true})
    language?: LanguageRelationFilter;
}
