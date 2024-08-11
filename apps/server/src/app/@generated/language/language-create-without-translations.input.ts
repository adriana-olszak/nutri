import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodSearchVectorCreateNestedManyWithoutLanguageInput } from '../food-search-vector/food-search-vector-create-nested-many-without-language.input';

@InputType()
export class LanguageCreateWithoutTranslationsInput {

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => FoodSearchVectorCreateNestedManyWithoutLanguageInput, {nullable:true})
    searchVectors?: FoodSearchVectorCreateNestedManyWithoutLanguageInput;
}
