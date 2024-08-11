import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenBlacklistWhereInput } from './token-blacklist-where.input';
import { Type } from 'class-transformer';
import { TokenBlacklistOrderByWithRelationInput } from './token-blacklist-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TokenBlacklistWhereUniqueInput } from './token-blacklist-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TokenBlacklistScalarFieldEnum } from './token-blacklist-scalar-field.enum';

@ArgsType()
export class FindFirstTokenBlacklistArgs {

    @Field(() => TokenBlacklistWhereInput, {nullable:true})
    @Type(() => TokenBlacklistWhereInput)
    where?: TokenBlacklistWhereInput;

    @Field(() => [TokenBlacklistOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TokenBlacklistOrderByWithRelationInput>;

    @Field(() => TokenBlacklistWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TokenBlacklistWhereUniqueInput, 'id' | 'token'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TokenBlacklistScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TokenBlacklistScalarFieldEnum>;
}
