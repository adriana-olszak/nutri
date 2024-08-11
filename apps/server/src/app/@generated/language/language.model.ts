import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Translation } from '../translation/translation.model';
import { FoodSearchVector } from '../food-search-vector/food-search-vector.model';
import { LanguageCount } from './language-count.output';

@ObjectType()
export class Language {

    @Field(() => ID, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Translation], {nullable:true})
    translations?: Array<Translation>;

    @Field(() => [FoodSearchVector], {nullable:true})
    searchVectors?: Array<FoodSearchVector>;

    @Field(() => LanguageCount, {nullable:false})
    _count?: LanguageCount;
}
