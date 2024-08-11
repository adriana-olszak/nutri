import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguageCreateInput } from './language-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneLanguageArgs {

    @Field(() => LanguageCreateInput, {nullable:false})
    @Type(() => LanguageCreateInput)
    data!: LanguageCreateInput;
}
