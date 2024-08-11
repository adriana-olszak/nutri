import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCreateWithoutSearchVectorsInput } from './language-create-without-search-vectors.input';
import { Type } from 'class-transformer';
import { LanguageCreateOrConnectWithoutSearchVectorsInput } from './language-create-or-connect-without-search-vectors.input';
import { LanguageUpsertWithoutSearchVectorsInput } from './language-upsert-without-search-vectors.input';
import { Prisma } from '@prisma/client';
import { LanguageWhereUniqueInput } from './language-where-unique.input';
import { LanguageUpdateToOneWithWhereWithoutSearchVectorsInput } from './language-update-to-one-with-where-without-search-vectors.input';

@InputType()
export class LanguageUpdateOneRequiredWithoutSearchVectorsNestedInput {

    @Field(() => LanguageCreateWithoutSearchVectorsInput, {nullable:true})
    @Type(() => LanguageCreateWithoutSearchVectorsInput)
    create?: LanguageCreateWithoutSearchVectorsInput;

    @Field(() => LanguageCreateOrConnectWithoutSearchVectorsInput, {nullable:true})
    @Type(() => LanguageCreateOrConnectWithoutSearchVectorsInput)
    connectOrCreate?: LanguageCreateOrConnectWithoutSearchVectorsInput;

    @Field(() => LanguageUpsertWithoutSearchVectorsInput, {nullable:true})
    @Type(() => LanguageUpsertWithoutSearchVectorsInput)
    upsert?: LanguageUpsertWithoutSearchVectorsInput;

    @Field(() => LanguageWhereUniqueInput, {nullable:true})
    @Type(() => LanguageWhereUniqueInput)
    connect?: Prisma.AtLeast<LanguageWhereUniqueInput, 'code'>;

    @Field(() => LanguageUpdateToOneWithWhereWithoutSearchVectorsInput, {nullable:true})
    @Type(() => LanguageUpdateToOneWithWhereWithoutSearchVectorsInput)
    update?: LanguageUpdateToOneWithWhereWithoutSearchVectorsInput;
}
