import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoginLogCreateManyInput } from './login-log-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyLoginLogArgs {

    @Field(() => [LoginLogCreateManyInput], {nullable:false})
    @Type(() => LoginLogCreateManyInput)
    data!: Array<LoginLogCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
