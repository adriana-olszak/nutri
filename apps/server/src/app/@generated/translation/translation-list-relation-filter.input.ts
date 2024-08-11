import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TranslationWhereInput } from './translation-where.input';

@InputType()
export class TranslationListRelationFilter {

    @Field(() => TranslationWhereInput, {nullable:true})
    every?: TranslationWhereInput;

    @Field(() => TranslationWhereInput, {nullable:true})
    some?: TranslationWhereInput;

    @Field(() => TranslationWhereInput, {nullable:true})
    none?: TranslationWhereInput;
}
