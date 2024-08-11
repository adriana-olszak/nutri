import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordResetTokenWhereInput } from './password-reset-token-where.input';
import { Type } from 'class-transformer';
import { PasswordResetTokenOrderByWithRelationInput } from './password-reset-token-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PasswordResetTokenWhereUniqueInput } from './password-reset-token-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PasswordResetTokenScalarFieldEnum } from './password-reset-token-scalar-field.enum';

@ArgsType()
export class FindManyPasswordResetTokenArgs {

    @Field(() => PasswordResetTokenWhereInput, {nullable:true})
    @Type(() => PasswordResetTokenWhereInput)
    where?: PasswordResetTokenWhereInput;

    @Field(() => [PasswordResetTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PasswordResetTokenOrderByWithRelationInput>;

    @Field(() => PasswordResetTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PasswordResetTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PasswordResetTokenScalarFieldEnum>;
}
