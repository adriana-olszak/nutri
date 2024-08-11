import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodSearchVectorFoodIdLanguageCodeCompoundUniqueInput } from './food-search-vector-food-id-language-code-compound-unique.input';
import { FoodSearchVectorWhereInput } from './food-search-vector-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FoodRelationFilter } from '../food/food-relation-filter.input';
import { LanguageRelationFilter } from '../language/language-relation-filter.input';

@InputType()
export class FoodSearchVectorWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => FoodSearchVectorFoodIdLanguageCodeCompoundUniqueInput, {nullable:true})
    foodId_languageCode?: FoodSearchVectorFoodIdLanguageCodeCompoundUniqueInput;

    @Field(() => [FoodSearchVectorWhereInput], {nullable:true})
    AND?: Array<FoodSearchVectorWhereInput>;

    @Field(() => [FoodSearchVectorWhereInput], {nullable:true})
    OR?: Array<FoodSearchVectorWhereInput>;

    @Field(() => [FoodSearchVectorWhereInput], {nullable:true})
    NOT?: Array<FoodSearchVectorWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    foodId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    languageCode?: StringFilter;

    @Field(() => FoodRelationFilter, {nullable:true})
    food?: FoodRelationFilter;

    @Field(() => LanguageRelationFilter, {nullable:true})
    language?: LanguageRelationFilter;
}
