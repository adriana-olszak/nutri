import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeasonWhereInput } from './season-where.input';
import { RecipeListRelationFilter } from '../recipe/recipe-list-relation-filter.input';

@InputType()
export class SeasonWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [SeasonWhereInput], {nullable:true})
    AND?: Array<SeasonWhereInput>;

    @Field(() => [SeasonWhereInput], {nullable:true})
    OR?: Array<SeasonWhereInput>;

    @Field(() => [SeasonWhereInput], {nullable:true})
    NOT?: Array<SeasonWhereInput>;

    @Field(() => RecipeListRelationFilter, {nullable:true})
    recipes?: RecipeListRelationFilter;
}
