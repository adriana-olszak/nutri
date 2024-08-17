import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class QuestionnaireVersionAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    versionNumber?: keyof typeof SortOrder;
}
