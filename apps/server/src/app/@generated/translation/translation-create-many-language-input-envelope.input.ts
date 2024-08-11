import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TranslationCreateManyLanguageInput } from './translation-create-many-language.input';
import { Type } from 'class-transformer';

@InputType()
export class TranslationCreateManyLanguageInputEnvelope {

    @Field(() => [TranslationCreateManyLanguageInput], {nullable:false})
    @Type(() => TranslationCreateManyLanguageInput)
    data!: Array<TranslationCreateManyLanguageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
