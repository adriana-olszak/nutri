import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { RecipeListRelationFilter } from '../recipe/recipe-list-relation-filter.input';

@InputType()
export class SeasonWhereInput {

    @Field(() => [SeasonWhereInput], {nullable:true})
    AND?: Array<SeasonWhereInput>;

    @Field(() => [SeasonWhereInput], {nullable:true})
    OR?: Array<SeasonWhereInput>;

    @Field(() => [SeasonWhereInput], {nullable:true})
    NOT?: Array<SeasonWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => RecipeListRelationFilter, {nullable:true})
    recipes?: RecipeListRelationFilter;
}
