import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class SeasonScalarWhereWithAggregatesInput {

    @Field(() => [SeasonScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SeasonScalarWhereWithAggregatesInput>;

    @Field(() => [SeasonScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SeasonScalarWhereWithAggregatesInput>;

    @Field(() => [SeasonScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SeasonScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
