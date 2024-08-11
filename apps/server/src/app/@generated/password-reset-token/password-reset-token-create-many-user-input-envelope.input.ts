import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PasswordResetTokenCreateManyUserInput } from './password-reset-token-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class PasswordResetTokenCreateManyUserInputEnvelope {

    @Field(() => [PasswordResetTokenCreateManyUserInput], {nullable:false})
    @Type(() => PasswordResetTokenCreateManyUserInput)
    data!: Array<PasswordResetTokenCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
