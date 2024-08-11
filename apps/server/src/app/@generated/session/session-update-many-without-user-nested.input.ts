import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionCreateWithoutUserInput } from './session-create-without-user.input';
import { Type } from 'class-transformer';
import { SessionCreateOrConnectWithoutUserInput } from './session-create-or-connect-without-user.input';
import { SessionUpsertWithWhereUniqueWithoutUserInput } from './session-upsert-with-where-unique-without-user.input';
import { SessionCreateManyUserInputEnvelope } from './session-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SessionWhereUniqueInput } from './session-where-unique.input';
import { SessionUpdateWithWhereUniqueWithoutUserInput } from './session-update-with-where-unique-without-user.input';
import { SessionUpdateManyWithWhereWithoutUserInput } from './session-update-many-with-where-without-user.input';
import { SessionScalarWhereInput } from './session-scalar-where.input';

@InputType()
export class SessionUpdateManyWithoutUserNestedInput {

    @Field(() => [SessionCreateWithoutUserInput], {nullable:true})
    @Type(() => SessionCreateWithoutUserInput)
    create?: Array<SessionCreateWithoutUserInput>;

    @Field(() => [SessionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SessionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;

    @Field(() => [SessionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SessionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<SessionUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => SessionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SessionCreateManyUserInputEnvelope)
    createMany?: SessionCreateManyUserInputEnvelope;

    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id'>>;

    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id'>>;

    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id'>>;

    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id'>>;

    @Field(() => [SessionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SessionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<SessionUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [SessionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => SessionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<SessionUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [SessionScalarWhereInput], {nullable:true})
    @Type(() => SessionScalarWhereInput)
    deleteMany?: Array<SessionScalarWhereInput>;
}
