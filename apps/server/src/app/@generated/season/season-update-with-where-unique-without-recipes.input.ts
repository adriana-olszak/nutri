import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SeasonWhereUniqueInput } from './season-where-unique.input';
import { Type } from 'class-transformer';
import { SeasonUpdateWithoutRecipesInput } from './season-update-without-recipes.input';

@InputType()
export class SeasonUpdateWithWhereUniqueWithoutRecipesInput {

    @Field(() => SeasonWhereUniqueInput, {nullable:false})
    @Type(() => SeasonWhereUniqueInput)
    where!: Prisma.AtLeast<SeasonWhereUniqueInput, 'id' | 'name'>;

    @Field(() => SeasonUpdateWithoutRecipesInput, {nullable:false})
    @Type(() => SeasonUpdateWithoutRecipesInput)
    data!: SeasonUpdateWithoutRecipesInput;
}
