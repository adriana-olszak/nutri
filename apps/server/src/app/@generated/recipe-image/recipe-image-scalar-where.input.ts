import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class RecipeImageScalarWhereInput {

    @Field(() => [RecipeImageScalarWhereInput], {nullable:true})
    AND?: Array<RecipeImageScalarWhereInput>;

    @Field(() => [RecipeImageScalarWhereInput], {nullable:true})
    OR?: Array<RecipeImageScalarWhereInput>;

    @Field(() => [RecipeImageScalarWhereInput], {nullable:true})
    NOT?: Array<RecipeImageScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    recipeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    altText?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    width?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    height?: IntNullableFilter;
}
