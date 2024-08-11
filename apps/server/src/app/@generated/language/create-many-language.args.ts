import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguageCreateManyInput } from './language-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyLanguageArgs {

    @Field(() => [LanguageCreateManyInput], {nullable:false})
    @Type(() => LanguageCreateManyInput)
    data!: Array<LanguageCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
