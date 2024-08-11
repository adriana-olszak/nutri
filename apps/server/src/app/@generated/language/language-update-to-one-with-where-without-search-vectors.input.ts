import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageWhereInput } from './language-where.input';
import { Type } from 'class-transformer';
import { LanguageUpdateWithoutSearchVectorsInput } from './language-update-without-search-vectors.input';

@InputType()
export class LanguageUpdateToOneWithWhereWithoutSearchVectorsInput {

    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    where?: LanguageWhereInput;

    @Field(() => LanguageUpdateWithoutSearchVectorsInput, {nullable:false})
    @Type(() => LanguageUpdateWithoutSearchVectorsInput)
    data!: LanguageUpdateWithoutSearchVectorsInput;
}
