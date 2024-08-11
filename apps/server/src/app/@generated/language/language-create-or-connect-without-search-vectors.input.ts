import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LanguageWhereUniqueInput } from './language-where-unique.input';
import { Type } from 'class-transformer';
import { LanguageCreateWithoutSearchVectorsInput } from './language-create-without-search-vectors.input';

@InputType()
export class LanguageCreateOrConnectWithoutSearchVectorsInput {

    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    @Type(() => LanguageWhereUniqueInput)
    where!: Prisma.AtLeast<LanguageWhereUniqueInput, 'code'>;

    @Field(() => LanguageCreateWithoutSearchVectorsInput, {nullable:false})
    @Type(() => LanguageCreateWithoutSearchVectorsInput)
    create!: LanguageCreateWithoutSearchVectorsInput;
}
