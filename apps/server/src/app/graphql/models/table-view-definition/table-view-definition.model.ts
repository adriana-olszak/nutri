import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ColumnView } from './column-view.model';

@ObjectType()
export class TableViewDefinition {
  @Field(() => String)
  id: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => String)
  tableId: string;

  @Field(() => String)
  tableType: string;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  order: number;

  @Field(() => String, { nullable: true })
  icon?: string;

  @Field(() => String, { nullable: true })
  filters?: string;

  @Field(() => String, { nullable: true })
  sorting?: string;

  @Field(() => [ColumnView])
  columns: ColumnView[];

  @Field(() => Boolean)
  isPreset: boolean;

  @Field(() => Boolean)
  isShared: boolean;
}
