import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TranslationWhereInput } from './translation-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTranslationArgs {

    @Field(() => TranslationWhereInput, {nullable:true})
    @Type(() => TranslationWhereInput)
    where?: TranslationWhereInput;
}
