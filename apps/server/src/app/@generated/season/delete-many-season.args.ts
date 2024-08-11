import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SeasonWhereInput } from './season-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySeasonArgs {

    @Field(() => SeasonWhereInput, {nullable:true})
    @Type(() => SeasonWhereInput)
    where?: SeasonWhereInput;
}
