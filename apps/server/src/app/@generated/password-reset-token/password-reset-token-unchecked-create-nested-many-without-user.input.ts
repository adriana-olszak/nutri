import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PasswordResetTokenCreateWithoutUserInput } from './password-reset-token-create-without-user.input';
import { Type } from 'class-transformer';
import { PasswordResetTokenCreateOrConnectWithoutUserInput } from './password-reset-token-create-or-connect-without-user.input';
import { PasswordResetTokenCreateManyUserInputEnvelope } from './password-reset-token-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PasswordResetTokenWhereUniqueInput } from './password-reset-token-where-unique.input';

@InputType()
export class PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [PasswordResetTokenCreateWithoutUserInput], {nullable:true})
    @Type(() => PasswordResetTokenCreateWithoutUserInput)
    create?: Array<PasswordResetTokenCreateWithoutUserInput>;

    @Field(() => [PasswordResetTokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PasswordResetTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PasswordResetTokenCreateOrConnectWithoutUserInput>;

    @Field(() => PasswordResetTokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PasswordResetTokenCreateManyUserInputEnvelope)
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope;

    @Field(() => [PasswordResetTokenWhereUniqueInput], {nullable:true})
    @Type(() => PasswordResetTokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token'>>;
}
