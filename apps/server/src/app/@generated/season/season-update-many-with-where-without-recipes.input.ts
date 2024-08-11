import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeasonScalarWhereInput } from './season-scalar-where.input';
import { Type } from 'class-transformer';
import { SeasonUpdateManyMutationInput } from './season-update-many-mutation.input';

@InputType()
export class SeasonUpdateManyWithWhereWithoutRecipesInput {

    @Field(() => SeasonScalarWhereInput, {nullable:false})
    @Type(() => SeasonScalarWhereInput)
    where!: SeasonScalarWhereInput;

    @Field(() => SeasonUpdateManyMutationInput, {nullable:false})
    @Type(() => SeasonUpdateManyMutationInput)
    data!: SeasonUpdateManyMutationInput;
}
