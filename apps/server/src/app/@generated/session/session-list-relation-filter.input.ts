import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionWhereInput } from './session-where.input';

@InputType()
export class SessionListRelationFilter {

    @Field(() => SessionWhereInput, {nullable:true})
    every?: SessionWhereInput;

    @Field(() => SessionWhereInput, {nullable:true})
    some?: SessionWhereInput;

    @Field(() => SessionWhereInput, {nullable:true})
    none?: SessionWhereInput;
}
