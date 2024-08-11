import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PasswordResetTokenCreateWithoutUserInput } from './password-reset-token-create-without-user.input';
import { Type } from 'class-transformer';
import { PasswordResetTokenCreateOrConnectWithoutUserInput } from './password-reset-token-create-or-connect-without-user.input';
import { PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput } from './password-reset-token-upsert-with-where-unique-without-user.input';
import { PasswordResetTokenCreateManyUserInputEnvelope } from './password-reset-token-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PasswordResetTokenWhereUniqueInput } from './password-reset-token-where-unique.input';
import { PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput } from './password-reset-token-update-with-where-unique-without-user.input';
import { PasswordResetTokenUpdateManyWithWhereWithoutUserInput } from './password-reset-token-update-many-with-where-without-user.input';
import { PasswordResetTokenScalarWhereInput } from './password-reset-token-scalar-where.input';

@InputType()
export class PasswordResetTokenUpdateManyWithoutUserNestedInput {

    @Field(() => [PasswordResetTokenCreateWithoutUserInput], {nullable:true})
    @Type(() => PasswordResetTokenCreateWithoutUserInput)
    create?: Array<PasswordResetTokenCreateWithoutUserInput>;

    @Field(() => [PasswordResetTokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PasswordResetTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PasswordResetTokenCreateOrConnectWithoutUserInput>;

    @Field(() => [PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PasswordResetTokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PasswordResetTokenCreateManyUserInputEnvelope)
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope;

    @Field(() => [PasswordResetTokenWhereUniqueInput], {nullable:true})
    @Type(() => PasswordResetTokenWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token'>>;

    @Field(() => [PasswordResetTokenWhereUniqueInput], {nullable:true})
    @Type(() => PasswordResetTokenWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token'>>;

    @Field(() => [PasswordResetTokenWhereUniqueInput], {nullable:true})
    @Type(() => PasswordResetTokenWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token'>>;

    @Field(() => [PasswordResetTokenWhereUniqueInput], {nullable:true})
    @Type(() => PasswordResetTokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token'>>;

    @Field(() => [PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PasswordResetTokenUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PasswordResetTokenUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PasswordResetTokenUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PasswordResetTokenScalarWhereInput], {nullable:true})
    @Type(() => PasswordResetTokenScalarWhereInput)
    deleteMany?: Array<PasswordResetTokenScalarWhereInput>;
}
