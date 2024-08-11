import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TranslationCreateNestedManyWithoutLanguageInput } from '../translation/translation-create-nested-many-without-language.input';
import { FoodSearchVectorCreateNestedManyWithoutLanguageInput } from '../food-search-vector/food-search-vector-create-nested-many-without-language.input';

@InputType()
export class LanguageCreateInput {

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => TranslationCreateNestedManyWithoutLanguageInput, {nullable:true})
    translations?: TranslationCreateNestedManyWithoutLanguageInput;

    @Field(() => FoodSearchVectorCreateNestedManyWithoutLanguageInput, {nullable:true})
    searchVectors?: FoodSearchVectorCreateNestedManyWithoutLanguageInput;
}
