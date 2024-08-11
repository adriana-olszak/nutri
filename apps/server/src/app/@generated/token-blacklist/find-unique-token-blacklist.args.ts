import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TokenBlacklistWhereUniqueInput } from './token-blacklist-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTokenBlacklistArgs {

    @Field(() => TokenBlacklistWhereUniqueInput, {nullable:false})
    @Type(() => TokenBlacklistWhereUniqueInput)
    where!: Prisma.AtLeast<TokenBlacklistWhereUniqueInput, 'id' | 'token'>;
}
