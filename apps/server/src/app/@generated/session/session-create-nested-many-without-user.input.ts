import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionCreateWithoutUserInput } from './session-create-without-user.input';
import { Type } from 'class-transformer';
import { SessionCreateOrConnectWithoutUserInput } from './session-create-or-connect-without-user.input';
import { SessionCreateManyUserInputEnvelope } from './session-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SessionWhereUniqueInput } from './session-where-unique.input';

@InputType()
export class SessionCreateNestedManyWithoutUserInput {

    @Field(() => [SessionCreateWithoutUserInput], {nullable:true})
    @Type(() => SessionCreateWithoutUserInput)
    create?: Array<SessionCreateWithoutUserInput>;

    @Field(() => [SessionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SessionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;

    @Field(() => SessionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SessionCreateManyUserInputEnvelope)
    createMany?: SessionCreateManyUserInputEnvelope;

    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id'>>;
}
