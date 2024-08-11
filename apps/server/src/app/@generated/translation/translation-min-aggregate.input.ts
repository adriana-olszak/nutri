import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TranslationMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    entityType?: true;

    @Field(() => Boolean, {nullable:true})
    entityId?: true;

    @Field(() => Boolean, {nullable:true})
    field?: true;

    @Field(() => Boolean, {nullable:true})
    value?: true;

    @Field(() => Boolean, {nullable:true})
    languageCode?: true;
}
