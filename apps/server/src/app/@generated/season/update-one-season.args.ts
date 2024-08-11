import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SeasonUpdateInput } from './season-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SeasonWhereUniqueInput } from './season-where-unique.input';

@ArgsType()
export class UpdateOneSeasonArgs {

    @Field(() => SeasonUpdateInput, {nullable:false})
    @Type(() => SeasonUpdateInput)
    data!: SeasonUpdateInput;

    @Field(() => SeasonWhereUniqueInput, {nullable:false})
    @Type(() => SeasonWhereUniqueInput)
    where!: Prisma.AtLeast<SeasonWhereUniqueInput, 'id' | 'name'>;
}
