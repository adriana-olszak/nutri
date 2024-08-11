import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SeasonWhereInput } from './season-where.input';
import { Type } from 'class-transformer';
import { SeasonOrderByWithRelationInput } from './season-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SeasonWhereUniqueInput } from './season-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SeasonScalarFieldEnum } from './season-scalar-field.enum';

@ArgsType()
export class FindFirstSeasonOrThrowArgs {

    @Field(() => SeasonWhereInput, {nullable:true})
    @Type(() => SeasonWhereInput)
    where?: SeasonWhereInput;

    @Field(() => [SeasonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SeasonOrderByWithRelationInput>;

    @Field(() => SeasonWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SeasonWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SeasonScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SeasonScalarFieldEnum>;
}
