import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenBlacklistUpdateManyMutationInput } from './token-blacklist-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TokenBlacklistWhereInput } from './token-blacklist-where.input';

@ArgsType()
export class UpdateManyTokenBlacklistArgs {

    @Field(() => TokenBlacklistUpdateManyMutationInput, {nullable:false})
    @Type(() => TokenBlacklistUpdateManyMutationInput)
    data!: TokenBlacklistUpdateManyMutationInput;

    @Field(() => TokenBlacklistWhereInput, {nullable:true})
    @Type(() => TokenBlacklistWhereInput)
    where?: TokenBlacklistWhereInput;
}
