import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PasswordResetTokenScalarWhereInput } from './password-reset-token-scalar-where.input';
import { Type } from 'class-transformer';
import { PasswordResetTokenUpdateManyMutationInput } from './password-reset-token-update-many-mutation.input';

@InputType()
export class PasswordResetTokenUpdateManyWithWhereWithoutUserInput {

    @Field(() => PasswordResetTokenScalarWhereInput, {nullable:false})
    @Type(() => PasswordResetTokenScalarWhereInput)
    where!: PasswordResetTokenScalarWhereInput;

    @Field(() => PasswordResetTokenUpdateManyMutationInput, {nullable:false})
    @Type(() => PasswordResetTokenUpdateManyMutationInput)
    data!: PasswordResetTokenUpdateManyMutationInput;
}
