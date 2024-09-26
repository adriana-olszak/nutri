import { InputType } from '@nestjs/graphql';
import { FilterInput } from '../common/filter.mixin';
import { RecipeFilterProperty } from './recipe-filter-property.enum';


@InputType('RecipeFilterInput')
export class RecipeFilterInput extends FilterInput(RecipeFilterProperty, 'Recipe') {
}
