import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodSearchVectorUncheckedCreateNestedManyWithoutLanguageInput } from '../food-search-vector/food-search-vector-unchecked-create-nested-many-without-language.input';

@InputType()
export class LanguageUncheckedCreateWithoutTranslationsInput {

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => FoodSearchVectorUncheckedCreateNestedManyWithoutLanguageInput, {nullable:true})
    searchVectors?: FoodSearchVectorUncheckedCreateNestedManyWithoutLanguageInput;
}
