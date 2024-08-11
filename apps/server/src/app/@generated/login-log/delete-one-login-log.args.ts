import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LoginLogWhereUniqueInput } from './login-log-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneLoginLogArgs {

    @Field(() => LoginLogWhereUniqueInput, {nullable:false})
    @Type(() => LoginLogWhereUniqueInput)
    where!: Prisma.AtLeast<LoginLogWhereUniqueInput, 'id'>;
}
