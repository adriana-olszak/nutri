import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagCreateWithoutRecipesInput } from './tag-create-without-recipes.input';

@InputType()
export class TagCreateOrConnectWithoutRecipesInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;

    @Field(() => TagCreateWithoutRecipesInput, {nullable:false})
    @Type(() => TagCreateWithoutRecipesInput)
    create!: TagCreateWithoutRecipesInput;
}
