import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SeasonUpdateManyMutationInput } from './season-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SeasonWhereInput } from './season-where.input';

@ArgsType()
export class UpdateManySeasonArgs {

    @Field(() => SeasonUpdateManyMutationInput, {nullable:false})
    @Type(() => SeasonUpdateManyMutationInput)
    data!: SeasonUpdateManyMutationInput;

    @Field(() => SeasonWhereInput, {nullable:true})
    @Type(() => SeasonWhereInput)
    where?: SeasonWhereInput;
}
