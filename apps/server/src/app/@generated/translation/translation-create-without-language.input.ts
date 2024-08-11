import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TranslationCreateWithoutLanguageInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    entityType!: string;

    @Field(() => String, {nullable:false})
    entityId!: string;

    @Field(() => String, {nullable:false})
    field!: string;

    @Field(() => String, {nullable:false})
    value!: string;
}
