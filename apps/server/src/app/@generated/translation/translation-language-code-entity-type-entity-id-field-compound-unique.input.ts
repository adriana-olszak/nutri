import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TranslationLanguageCodeEntityTypeEntityIdFieldCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    languageCode!: string;

    @Field(() => String, {nullable:false})
    entityType!: string;

    @Field(() => String, {nullable:false})
    entityId!: string;

    @Field(() => String, {nullable:false})
    field!: string;
}
