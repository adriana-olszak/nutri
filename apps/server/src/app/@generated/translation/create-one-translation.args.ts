import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TranslationCreateInput } from './translation-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTranslationArgs {

    @Field(() => TranslationCreateInput, {nullable:false})
    @Type(() => TranslationCreateInput)
    data!: TranslationCreateInput;
}
