import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TranslationUpdateManyMutationInput } from './translation-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TranslationWhereInput } from './translation-where.input';

@ArgsType()
export class UpdateManyTranslationArgs {

    @Field(() => TranslationUpdateManyMutationInput, {nullable:false})
    @Type(() => TranslationUpdateManyMutationInput)
    data!: TranslationUpdateManyMutationInput;

    @Field(() => TranslationWhereInput, {nullable:true})
    @Type(() => TranslationWhereInput)
    where?: TranslationWhereInput;
}
