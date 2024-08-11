import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TokenBlacklistWhereUniqueInput } from './token-blacklist-where-unique.input';
import { Type } from 'class-transformer';
import { TokenBlacklistCreateInput } from './token-blacklist-create.input';
import { TokenBlacklistUpdateInput } from './token-blacklist-update.input';

@ArgsType()
export class UpsertOneTokenBlacklistArgs {

    @Field(() => TokenBlacklistWhereUniqueInput, {nullable:false})
    @Type(() => TokenBlacklistWhereUniqueInput)
    where!: Prisma.AtLeast<TokenBlacklistWhereUniqueInput, 'id' | 'token'>;

    @Field(() => TokenBlacklistCreateInput, {nullable:false})
    @Type(() => TokenBlacklistCreateInput)
    create!: TokenBlacklistCreateInput;

    @Field(() => TokenBlacklistUpdateInput, {nullable:false})
    @Type(() => TokenBlacklistUpdateInput)
    update!: TokenBlacklistUpdateInput;
}
