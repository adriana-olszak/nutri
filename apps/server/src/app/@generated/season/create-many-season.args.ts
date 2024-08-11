import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SeasonCreateManyInput } from './season-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySeasonArgs {

    @Field(() => [SeasonCreateManyInput], {nullable:false})
    @Type(() => SeasonCreateManyInput)
    data!: Array<SeasonCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
