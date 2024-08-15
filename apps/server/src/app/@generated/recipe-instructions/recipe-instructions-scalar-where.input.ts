import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumRecipeInstructionsTypeFilter } from '../prisma/enum-recipe-instructions-type-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class RecipeInstructionsScalarWhereInput {

    @Field(() => [RecipeInstructionsScalarWhereInput], {nullable:true})
    AND?: Array<RecipeInstructionsScalarWhereInput>;

    @Field(() => [RecipeInstructionsScalarWhereInput], {nullable:true})
    OR?: Array<RecipeInstructionsScalarWhereInput>;

    @Field(() => [RecipeInstructionsScalarWhereInput], {nullable:true})
    NOT?: Array<RecipeInstructionsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    recipeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => EnumRecipeInstructionsTypeFilter, {nullable:true})
    type?: EnumRecipeInstructionsTypeFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    listIndex?: IntNullableFilter;
}
