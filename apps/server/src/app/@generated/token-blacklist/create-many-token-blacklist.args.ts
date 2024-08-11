import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenBlacklistCreateManyInput } from './token-blacklist-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTokenBlacklistArgs {

    @Field(() => [TokenBlacklistCreateManyInput], {nullable:false})
    @Type(() => TokenBlacklistCreateManyInput)
    data!: Array<TokenBlacklistCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
