import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenBlacklistCreateInput } from './token-blacklist-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTokenBlacklistArgs {

    @Field(() => TokenBlacklistCreateInput, {nullable:false})
    @Type(() => TokenBlacklistCreateInput)
    data!: TokenBlacklistCreateInput;
}
