import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SeasonWhereUniqueInput } from './season-where-unique.input';
import { Type } from 'class-transformer';
import { SeasonCreateInput } from './season-create.input';
import { SeasonUpdateInput } from './season-update.input';

@ArgsType()
export class UpsertOneSeasonArgs {

    @Field(() => SeasonWhereUniqueInput, {nullable:false})
    @Type(() => SeasonWhereUniqueInput)
    where!: Prisma.AtLeast<SeasonWhereUniqueInput, 'id' | 'name'>;

    @Field(() => SeasonCreateInput, {nullable:false})
    @Type(() => SeasonCreateInput)
    create!: SeasonCreateInput;

    @Field(() => SeasonUpdateInput, {nullable:false})
    @Type(() => SeasonUpdateInput)
    update!: SeasonUpdateInput;
}
