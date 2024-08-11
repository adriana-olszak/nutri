import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TranslationCreateManyInput } from './translation-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTranslationArgs {

    @Field(() => [TranslationCreateManyInput], {nullable:false})
    @Type(() => TranslationCreateManyInput)
    data!: Array<TranslationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
