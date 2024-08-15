import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ColumnView {
  @Field(() => String)
  id: string;

  @Field(() => Int)
  columnId: number;

  @Field(() => String)
  columnType: string;

  @Field(() => Int)
  width: number;

  @Field(() => Boolean)
  visible: boolean;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  filter?: string;

  @Field(() => String)
  tableViewDefinitionId: string;
}
