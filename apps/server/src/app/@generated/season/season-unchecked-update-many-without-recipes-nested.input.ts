import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeasonCreateWithoutRecipesInput } from './season-create-without-recipes.input';
import { Type } from 'class-transformer';
import { SeasonCreateOrConnectWithoutRecipesInput } from './season-create-or-connect-without-recipes.input';
import { SeasonUpsertWithWhereUniqueWithoutRecipesInput } from './season-upsert-with-where-unique-without-recipes.input';
import { Prisma } from '@prisma/client';
import { SeasonWhereUniqueInput } from './season-where-unique.input';
import { SeasonUpdateWithWhereUniqueWithoutRecipesInput } from './season-update-with-where-unique-without-recipes.input';
import { SeasonUpdateManyWithWhereWithoutRecipesInput } from './season-update-many-with-where-without-recipes.input';
import { SeasonScalarWhereInput } from './season-scalar-where.input';

@InputType()
export class SeasonUncheckedUpdateManyWithoutRecipesNestedInput {

    @Field(() => [SeasonCreateWithoutRecipesInput], {nullable:true})
    @Type(() => SeasonCreateWithoutRecipesInput)
    create?: Array<SeasonCreateWithoutRecipesInput>;

    @Field(() => [SeasonCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => SeasonCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<SeasonCreateOrConnectWithoutRecipesInput>;

    @Field(() => [SeasonUpsertWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => SeasonUpsertWithWhereUniqueWithoutRecipesInput)
    upsert?: Array<SeasonUpsertWithWhereUniqueWithoutRecipesInput>;

    @Field(() => [SeasonWhereUniqueInput], {nullable:true})
    @Type(() => SeasonWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SeasonWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [SeasonWhereUniqueInput], {nullable:true})
    @Type(() => SeasonWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SeasonWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [SeasonWhereUniqueInput], {nullable:true})
    @Type(() => SeasonWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SeasonWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [SeasonWhereUniqueInput], {nullable:true})
    @Type(() => SeasonWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SeasonWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [SeasonUpdateWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => SeasonUpdateWithWhereUniqueWithoutRecipesInput)
    update?: Array<SeasonUpdateWithWhereUniqueWithoutRecipesInput>;

    @Field(() => [SeasonUpdateManyWithWhereWithoutRecipesInput], {nullable:true})
    @Type(() => SeasonUpdateManyWithWhereWithoutRecipesInput)
    updateMany?: Array<SeasonUpdateManyWithWhereWithoutRecipesInput>;

    @Field(() => [SeasonScalarWhereInput], {nullable:true})
    @Type(() => SeasonScalarWhereInput)
    deleteMany?: Array<SeasonScalarWhereInput>;
}
