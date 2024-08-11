import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class LoginLog {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => Boolean, {nullable:false})
    success!: boolean;

    @Field(() => String, {nullable:true})
    ipAddress!: string | null;

    @Field(() => String, {nullable:true})
    userAgent!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:true})
    user?: User | null;
}
