import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutSeasonsInput } from './recipe-create-without-seasons.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutSeasonsInput } from './recipe-create-or-connect-without-seasons.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeUncheckedCreateNestedManyWithoutSeasonsInput {

    @Field(() => [RecipeCreateWithoutSeasonsInput], {nullable:true})
    @Type(() => RecipeCreateWithoutSeasonsInput)
    create?: Array<RecipeCreateWithoutSeasonsInput>;

    @Field(() => [RecipeCreateOrConnectWithoutSeasonsInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutSeasonsInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutSeasonsInput>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>>;
}
