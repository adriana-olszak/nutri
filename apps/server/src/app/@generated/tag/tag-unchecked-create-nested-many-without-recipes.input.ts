import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutRecipesInput } from './tag-create-without-recipes.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutRecipesInput } from './tag-create-or-connect-without-recipes.input';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagUncheckedCreateNestedManyWithoutRecipesInput {

    @Field(() => [TagCreateWithoutRecipesInput], {nullable:true})
    @Type(() => TagCreateWithoutRecipesInput)
    create?: Array<TagCreateWithoutRecipesInput>;

    @Field(() => [TagCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutRecipesInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
}
