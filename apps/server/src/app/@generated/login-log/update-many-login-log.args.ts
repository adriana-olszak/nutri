import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoginLogUpdateManyMutationInput } from './login-log-update-many-mutation.input';
import { Type } from 'class-transformer';
import { LoginLogWhereInput } from './login-log-where.input';

@ArgsType()
export class UpdateManyLoginLogArgs {

    @Field(() => LoginLogUpdateManyMutationInput, {nullable:false})
    @Type(() => LoginLogUpdateManyMutationInput)
    data!: LoginLogUpdateManyMutationInput;

    @Field(() => LoginLogWhereInput, {nullable:true})
    @Type(() => LoginLogWhereInput)
    where?: LoginLogWhereInput;
}
