import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TranslationMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    entityType?: string;

    @Field(() => String, {nullable:true})
    entityId?: string;

    @Field(() => String, {nullable:true})
    field?: string;

    @Field(() => String, {nullable:true})
    value?: string;

    @Field(() => String, {nullable:true})
    languageCode?: string;
}
