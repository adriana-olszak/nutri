import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionScalarWhereInput } from './session-scalar-where.input';
import { Type } from 'class-transformer';
import { SessionUpdateManyMutationInput } from './session-update-many-mutation.input';

@InputType()
export class SessionUpdateManyWithWhereWithoutUserInput {

    @Field(() => SessionScalarWhereInput, {nullable:false})
    @Type(() => SessionScalarWhereInput)
    where!: SessionScalarWhereInput;

    @Field(() => SessionUpdateManyMutationInput, {nullable:false})
    @Type(() => SessionUpdateManyMutationInput)
    data!: SessionUpdateManyMutationInput;
}
