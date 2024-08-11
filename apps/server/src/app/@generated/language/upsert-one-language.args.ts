import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LanguageWhereUniqueInput } from './language-where-unique.input';
import { Type } from 'class-transformer';
import { LanguageCreateInput } from './language-create.input';
import { LanguageUpdateInput } from './language-update.input';

@ArgsType()
export class UpsertOneLanguageArgs {

    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    @Type(() => LanguageWhereUniqueInput)
    where!: Prisma.AtLeast<LanguageWhereUniqueInput, 'code'>;

    @Field(() => LanguageCreateInput, {nullable:false})
    @Type(() => LanguageCreateInput)
    create!: LanguageCreateInput;

    @Field(() => LanguageUpdateInput, {nullable:false})
    @Type(() => LanguageUpdateInput)
    update!: LanguageUpdateInput;
}
