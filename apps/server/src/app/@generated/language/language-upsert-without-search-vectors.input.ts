import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageUpdateWithoutSearchVectorsInput } from './language-update-without-search-vectors.input';
import { Type } from 'class-transformer';
import { LanguageCreateWithoutSearchVectorsInput } from './language-create-without-search-vectors.input';
import { LanguageWhereInput } from './language-where.input';

@InputType()
export class LanguageUpsertWithoutSearchVectorsInput {

    @Field(() => LanguageUpdateWithoutSearchVectorsInput, {nullable:false})
    @Type(() => LanguageUpdateWithoutSearchVectorsInput)
    update!: LanguageUpdateWithoutSearchVectorsInput;

    @Field(() => LanguageCreateWithoutSearchVectorsInput, {nullable:false})
    @Type(() => LanguageCreateWithoutSearchVectorsInput)
    create!: LanguageCreateWithoutSearchVectorsInput;

    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    where?: LanguageWhereInput;
}
