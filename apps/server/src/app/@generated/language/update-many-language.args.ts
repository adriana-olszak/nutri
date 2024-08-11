import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguageUpdateManyMutationInput } from './language-update-many-mutation.input';
import { Type } from 'class-transformer';
import { LanguageWhereInput } from './language-where.input';

@ArgsType()
export class UpdateManyLanguageArgs {

    @Field(() => LanguageUpdateManyMutationInput, {nullable:false})
    @Type(() => LanguageUpdateManyMutationInput)
    data!: LanguageUpdateManyMutationInput;

    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    where?: LanguageWhereInput;
}
