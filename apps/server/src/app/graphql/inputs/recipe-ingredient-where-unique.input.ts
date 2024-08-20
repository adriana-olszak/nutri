import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeIngredientWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [RecipeIngredientWhereUniqueInput], {nullable:true})
    AND?: Array<RecipeIngredientWhereUniqueInput>;

    @Field(() => [RecipeIngredientWhereUniqueInput], {nullable:true})
    OR?: Array<RecipeIngredientWhereUniqueInput>;

    @Field(() => [RecipeIngredientWhereUniqueInput], {nullable:true})
    NOT?: Array<RecipeIngredientWhereUniqueInput>;
}
