import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutSeasonsInput } from './recipe-create-without-seasons.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutSeasonsInput } from './recipe-create-or-connect-without-seasons.input';
import { RecipeUpsertWithWhereUniqueWithoutSeasonsInput } from './recipe-upsert-with-where-unique-without-seasons.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateWithWhereUniqueWithoutSeasonsInput } from './recipe-update-with-where-unique-without-seasons.input';
import { RecipeUpdateManyWithWhereWithoutSeasonsInput } from './recipe-update-many-with-where-without-seasons.input';
import { RecipeScalarWhereInput } from './recipe-scalar-where.input';

@InputType()
export class RecipeUpdateManyWithoutSeasonsNestedInput {

    @Field(() => [RecipeCreateWithoutSeasonsInput], {nullable:true})
    @Type(() => RecipeCreateWithoutSeasonsInput)
    create?: Array<RecipeCreateWithoutSeasonsInput>;

    @Field(() => [RecipeCreateOrConnectWithoutSeasonsInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutSeasonsInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutSeasonsInput>;

    @Field(() => [RecipeUpsertWithWhereUniqueWithoutSeasonsInput], {nullable:true})
    @Type(() => RecipeUpsertWithWhereUniqueWithoutSeasonsInput)
    upsert?: Array<RecipeUpsertWithWhereUniqueWithoutSeasonsInput>;

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

    @Field(() => [RecipeUpdateWithWhereUniqueWithoutSeasonsInput], {nullable:true})
    @Type(() => RecipeUpdateWithWhereUniqueWithoutSeasonsInput)
    update?: Array<RecipeUpdateWithWhereUniqueWithoutSeasonsInput>;

    @Field(() => [RecipeUpdateManyWithWhereWithoutSeasonsInput], {nullable:true})
    @Type(() => RecipeUpdateManyWithWhereWithoutSeasonsInput)
    updateMany?: Array<RecipeUpdateManyWithWhereWithoutSeasonsInput>;

    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    @Type(() => RecipeScalarWhereInput)
    deleteMany?: Array<RecipeScalarWhereInput>;
}
