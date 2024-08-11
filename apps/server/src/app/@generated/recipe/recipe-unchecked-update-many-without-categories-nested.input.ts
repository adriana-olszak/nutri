import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutCategoriesInput } from './recipe-create-without-categories.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutCategoriesInput } from './recipe-create-or-connect-without-categories.input';
import { RecipeUpsertWithWhereUniqueWithoutCategoriesInput } from './recipe-upsert-with-where-unique-without-categories.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateWithWhereUniqueWithoutCategoriesInput } from './recipe-update-with-where-unique-without-categories.input';
import { RecipeUpdateManyWithWhereWithoutCategoriesInput } from './recipe-update-many-with-where-without-categories.input';
import { RecipeScalarWhereInput } from './recipe-scalar-where.input';

@InputType()
export class RecipeUncheckedUpdateManyWithoutCategoriesNestedInput {

    @Field(() => [RecipeCreateWithoutCategoriesInput], {nullable:true})
    @Type(() => RecipeCreateWithoutCategoriesInput)
    create?: Array<RecipeCreateWithoutCategoriesInput>;

    @Field(() => [RecipeCreateOrConnectWithoutCategoriesInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutCategoriesInput>;

    @Field(() => [RecipeUpsertWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    @Type(() => RecipeUpsertWithWhereUniqueWithoutCategoriesInput)
    upsert?: Array<RecipeUpsertWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>>;

    @Field(() => [RecipeUpdateWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    @Type(() => RecipeUpdateWithWhereUniqueWithoutCategoriesInput)
    update?: Array<RecipeUpdateWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => [RecipeUpdateManyWithWhereWithoutCategoriesInput], {nullable:true})
    @Type(() => RecipeUpdateManyWithWhereWithoutCategoriesInput)
    updateMany?: Array<RecipeUpdateManyWithWhereWithoutCategoriesInput>;

    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    @Type(() => RecipeScalarWhereInput)
    deleteMany?: Array<RecipeScalarWhereInput>;
}
