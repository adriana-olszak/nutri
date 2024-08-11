import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguageUpdateInput } from './language-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { LanguageWhereUniqueInput } from './language-where-unique.input';

@ArgsType()
export class UpdateOneLanguageArgs {

    @Field(() => LanguageUpdateInput, {nullable:false})
    @Type(() => LanguageUpdateInput)
    data!: LanguageUpdateInput;

    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    @Type(() => LanguageWhereUniqueInput)
    where!: Prisma.AtLeast<LanguageWhereUniqueInput, 'code'>;
}
