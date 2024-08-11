import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class TranslationScalarWhereInput {

    @Field(() => [TranslationScalarWhereInput], {nullable:true})
    AND?: Array<TranslationScalarWhereInput>;

    @Field(() => [TranslationScalarWhereInput], {nullable:true})
    OR?: Array<TranslationScalarWhereInput>;

    @Field(() => [TranslationScalarWhereInput], {nullable:true})
    NOT?: Array<TranslationScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    entityType?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    entityId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    field?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    value?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    languageCode?: StringFilter;
}
