import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LanguageWhereUniqueInput } from './language-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneLanguageArgs {

    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    @Type(() => LanguageWhereUniqueInput)
    where!: Prisma.AtLeast<LanguageWhereUniqueInput, 'code'>;
}
