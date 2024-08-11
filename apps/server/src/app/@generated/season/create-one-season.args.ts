import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SeasonCreateInput } from './season-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSeasonArgs {

    @Field(() => SeasonCreateInput, {nullable:false})
    @Type(() => SeasonCreateInput)
    data!: SeasonCreateInput;
}
