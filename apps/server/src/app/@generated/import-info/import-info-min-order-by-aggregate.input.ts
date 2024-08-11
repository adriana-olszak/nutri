import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ImportInfoMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sourceVersion?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    importDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dataSource?: keyof typeof SortOrder;
}
