import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagUpdateWithoutRecipesInput } from './tag-update-without-recipes.input';
import { TagCreateWithoutRecipesInput } from './tag-create-without-recipes.input';

@InputType()
export class TagUpsertWithWhereUniqueWithoutRecipesInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;

    @Field(() => TagUpdateWithoutRecipesInput, {nullable:false})
    @Type(() => TagUpdateWithoutRecipesInput)
    update!: TagUpdateWithoutRecipesInput;

    @Field(() => TagCreateWithoutRecipesInput, {nullable:false})
    @Type(() => TagCreateWithoutRecipesInput)
    create!: TagCreateWithoutRecipesInput;
}
