import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Roles } from '../prisma/roles.enum';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    password!: string | null;

    @Field(() => [Roles], {nullable:true})
    roles!: Array<keyof typeof Roles>;

    @Field(() => String, {nullable:true})
    googleId!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    googleProfile!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

}
