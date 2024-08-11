import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutRecipesInput } from './tag-create-without-recipes.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutRecipesInput } from './tag-create-or-connect-without-recipes.input';
import { TagUpsertWithWhereUniqueWithoutRecipesInput } from './tag-upsert-with-where-unique-without-recipes.input';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithWhereUniqueWithoutRecipesInput } from './tag-update-with-where-unique-without-recipes.input';
import { TagUpdateManyWithWhereWithoutRecipesInput } from './tag-update-many-with-where-without-recipes.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';

@InputType()
export class TagUncheckedUpdateManyWithoutRecipesNestedInput {

    @Field(() => [TagCreateWithoutRecipesInput], {nullable:true})
    @Type(() => TagCreateWithoutRecipesInput)
    create?: Array<TagCreateWithoutRecipesInput>;

    @Field(() => [TagCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutRecipesInput>;

    @Field(() => [TagUpsertWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => TagUpsertWithWhereUniqueWithoutRecipesInput)
    upsert?: Array<TagUpsertWithWhereUniqueWithoutRecipesInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [TagUpdateWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => TagUpdateWithWhereUniqueWithoutRecipesInput)
    update?: Array<TagUpdateWithWhereUniqueWithoutRecipesInput>;

    @Field(() => [TagUpdateManyWithWhereWithoutRecipesInput], {nullable:true})
    @Type(() => TagUpdateManyWithWhereWithoutRecipesInput)
    updateMany?: Array<TagUpdateManyWithWhereWithoutRecipesInput>;

    @Field(() => [TagScalarWhereInput], {nullable:true})
    @Type(() => TagScalarWhereInput)
    deleteMany?: Array<TagScalarWhereInput>;
}
