import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenBlacklistWhereInput } from './token-blacklist-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTokenBlacklistArgs {

    @Field(() => TokenBlacklistWhereInput, {nullable:true})
    @Type(() => TokenBlacklistWhereInput)
    where?: TokenBlacklistWhereInput;
}
