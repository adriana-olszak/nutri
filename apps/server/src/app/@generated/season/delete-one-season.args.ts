import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SeasonWhereUniqueInput } from './season-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneSeasonArgs {

    @Field(() => SeasonWhereUniqueInput, {nullable:false})
    @Type(() => SeasonWhereUniqueInput)
    where!: Prisma.AtLeast<SeasonWhereUniqueInput, 'id' | 'name'>;
}
