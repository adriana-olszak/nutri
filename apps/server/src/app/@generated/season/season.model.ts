import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Recipe } from '../recipe/recipe.model';
import { SeasonCount } from './season-count.output';

@ObjectType()
export class Season {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Recipe], {nullable:true})
    recipes?: Array<Recipe>;

    @Field(() => SeasonCount, {nullable:false})
    _count?: SeasonCount;
}
