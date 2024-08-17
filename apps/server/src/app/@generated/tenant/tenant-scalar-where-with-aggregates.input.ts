import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class TenantScalarWhereWithAggregatesInput {

    @Field(() => [TenantScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TenantScalarWhereWithAggregatesInput>;

    @Field(() => [TenantScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TenantScalarWhereWithAggregatesInput>;

    @Field(() => [TenantScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TenantScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
