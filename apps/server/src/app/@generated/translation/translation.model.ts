import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Language } from '../language/language.model';

@ObjectType()
export class Translation {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    entityType!: string;

    @Field(() => String, {nullable:false})
    entityId!: string;

    @Field(() => String, {nullable:false})
    field!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => String, {nullable:false})
    languageCode!: string;

    @Field(() => Language, {nullable:false})
    language?: Language;
}
