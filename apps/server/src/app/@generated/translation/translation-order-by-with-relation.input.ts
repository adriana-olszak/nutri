import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LanguageOrderByWithRelationInput } from '../language/language-order-by-with-relation.input';

@InputType()
export class TranslationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    entityType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    entityId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    field?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => LanguageOrderByWithRelationInput, {nullable:true})
    language?: LanguageOrderByWithRelationInput;
}
