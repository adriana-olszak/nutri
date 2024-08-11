import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TranslationUncheckedCreateNestedManyWithoutLanguageInput } from '../translation/translation-unchecked-create-nested-many-without-language.input';
import { FoodSearchVectorUncheckedCreateNestedManyWithoutLanguageInput } from '../food-search-vector/food-search-vector-unchecked-create-nested-many-without-language.input';

@InputType()
export class LanguageUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => TranslationUncheckedCreateNestedManyWithoutLanguageInput, {nullable:true})
    translations?: TranslationUncheckedCreateNestedManyWithoutLanguageInput;

    @Field(() => FoodSearchVectorUncheckedCreateNestedManyWithoutLanguageInput, {nullable:true})
    searchVectors?: FoodSearchVectorUncheckedCreateNestedManyWithoutLanguageInput;
}
