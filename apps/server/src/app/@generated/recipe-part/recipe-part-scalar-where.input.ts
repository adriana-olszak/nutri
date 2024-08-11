import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class RecipePartScalarWhereInput {

    @Field(() => [RecipePartScalarWhereInput], {nullable:true})
    AND?: Array<RecipePartScalarWhereInput>;

    @Field(() => [RecipePartScalarWhereInput], {nullable:true})
    OR?: Array<RecipePartScalarWhereInput>;

    @Field(() => [RecipePartScalarWhereInput], {nullable:true})
    NOT?: Array<RecipePartScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    recipeId?: StringFilter;
}
