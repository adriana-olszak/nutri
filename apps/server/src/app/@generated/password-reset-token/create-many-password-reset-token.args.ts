import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordResetTokenCreateManyInput } from './password-reset-token-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPasswordResetTokenArgs {

    @Field(() => [PasswordResetTokenCreateManyInput], {nullable:false})
    @Type(() => PasswordResetTokenCreateManyInput)
    data!: Array<PasswordResetTokenCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
