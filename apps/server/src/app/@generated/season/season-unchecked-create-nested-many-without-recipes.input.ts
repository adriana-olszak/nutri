import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeasonCreateWithoutRecipesInput } from './season-create-without-recipes.input';
import { Type } from 'class-transformer';
import { SeasonCreateOrConnectWithoutRecipesInput } from './season-create-or-connect-without-recipes.input';
import { Prisma } from '@prisma/client';
import { SeasonWhereUniqueInput } from './season-where-unique.input';

@InputType()
export class SeasonUncheckedCreateNestedManyWithoutRecipesInput {

    @Field(() => [SeasonCreateWithoutRecipesInput], {nullable:true})
    @Type(() => SeasonCreateWithoutRecipesInput)
    create?: Array<SeasonCreateWithoutRecipesInput>;

    @Field(() => [SeasonCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => SeasonCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<SeasonCreateOrConnectWithoutRecipesInput>;

    @Field(() => [SeasonWhereUniqueInput], {nullable:true})
    @Type(() => SeasonWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SeasonWhereUniqueInput, 'id' | 'name'>>;
}
