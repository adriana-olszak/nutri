import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCategoryCreateWithoutRecipesInput } from './recipe-category-create-without-recipes.input';
import { Type } from 'class-transformer';
import { RecipeCategoryCreateOrConnectWithoutRecipesInput } from './recipe-category-create-or-connect-without-recipes.input';
import { RecipeCategoryUpsertWithWhereUniqueWithoutRecipesInput } from './recipe-category-upsert-with-where-unique-without-recipes.input';
import { Prisma } from '@prisma/client';
import { RecipeCategoryWhereUniqueInput } from './recipe-category-where-unique.input';
import { RecipeCategoryUpdateWithWhereUniqueWithoutRecipesInput } from './recipe-category-update-with-where-unique-without-recipes.input';
import { RecipeCategoryUpdateManyWithWhereWithoutRecipesInput } from './recipe-category-update-many-with-where-without-recipes.input';
import { RecipeCategoryScalarWhereInput } from './recipe-category-scalar-where.input';

@InputType()
export class RecipeCategoryUncheckedUpdateManyWithoutRecipesNestedInput {

    @Field(() => [RecipeCategoryCreateWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeCategoryCreateWithoutRecipesInput)
    create?: Array<RecipeCategoryCreateWithoutRecipesInput>;

    @Field(() => [RecipeCategoryCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeCategoryCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<RecipeCategoryCreateOrConnectWithoutRecipesInput>;

    @Field(() => [RecipeCategoryUpsertWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeCategoryUpsertWithWhereUniqueWithoutRecipesInput)
    upsert?: Array<RecipeCategoryUpsertWithWhereUniqueWithoutRecipesInput>;

    @Field(() => [RecipeCategoryWhereUniqueInput], {nullable:true})
    @Type(() => RecipeCategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeCategoryWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [RecipeCategoryWhereUniqueInput], {nullable:true})
    @Type(() => RecipeCategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeCategoryWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [RecipeCategoryWhereUniqueInput], {nullable:true})
    @Type(() => RecipeCategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeCategoryWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [RecipeCategoryWhereUniqueInput], {nullable:true})
    @Type(() => RecipeCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeCategoryWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [RecipeCategoryUpdateWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeCategoryUpdateWithWhereUniqueWithoutRecipesInput)
    update?: Array<RecipeCategoryUpdateWithWhereUniqueWithoutRecipesInput>;

    @Field(() => [RecipeCategoryUpdateManyWithWhereWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeCategoryUpdateManyWithWhereWithoutRecipesInput)
    updateMany?: Array<RecipeCategoryUpdateManyWithWhereWithoutRecipesInput>;

    @Field(() => [RecipeCategoryScalarWhereInput], {nullable:true})
    @Type(() => RecipeCategoryScalarWhereInput)
    deleteMany?: Array<RecipeCategoryScalarWhereInput>;
}
