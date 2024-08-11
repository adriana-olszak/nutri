import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TranslationScalarWhereInput } from './translation-scalar-where.input';
import { Type } from 'class-transformer';
import { TranslationUpdateManyMutationInput } from './translation-update-many-mutation.input';

@InputType()
export class TranslationUpdateManyWithWhereWithoutLanguageInput {

    @Field(() => TranslationScalarWhereInput, {nullable:false})
    @Type(() => TranslationScalarWhereInput)
    where!: TranslationScalarWhereInput;

    @Field(() => TranslationUpdateManyMutationInput, {nullable:false})
    @Type(() => TranslationUpdateManyMutationInput)
    data!: TranslationUpdateManyMutationInput;
}
