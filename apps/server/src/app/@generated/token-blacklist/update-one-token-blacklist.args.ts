import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenBlacklistUpdateInput } from './token-blacklist-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TokenBlacklistWhereUniqueInput } from './token-blacklist-where-unique.input';

@ArgsType()
export class UpdateOneTokenBlacklistArgs {

    @Field(() => TokenBlacklistUpdateInput, {nullable:false})
    @Type(() => TokenBlacklistUpdateInput)
    data!: TokenBlacklistUpdateInput;

    @Field(() => TokenBlacklistWhereUniqueInput, {nullable:false})
    @Type(() => TokenBlacklistWhereUniqueInput)
    where!: Prisma.AtLeast<TokenBlacklistWhereUniqueInput, 'id' | 'token'>;
}
