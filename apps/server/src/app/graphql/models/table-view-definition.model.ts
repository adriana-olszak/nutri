import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ColumnView } from './column-view.model';
import { TableIdTypeEnum } from '../enums/table-id-type.enum';
import { TableViewTypeEnum } from '../enums/table-view-type.enum';

@ObjectType()
export class TableViewDefinition {

  @Field(() => ID)
  id!: string;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;

  @Field(() => String, { nullable: true })
  userId!: string | null;

  @Field(() => TableIdTypeEnum)
  tableId!: TableIdTypeEnum;

  @Field(() => TableViewTypeEnum)
  tableType!: TableViewTypeEnum;

  @Field(() => String)
  name!: string;

  @Field(() => Int)
  order!: number;

  @Field(() => String, { nullable: true })
  icon!: string | null;

  @Field(() => String, { nullable: true })
  filters!: string | null;

  @Field(() => String, { nullable: true })
  sorting!: string | null;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isPreset!: boolean;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isShared!: boolean;

  @Field(() => [ColumnView], { nullable: false })
  columnView: Array<ColumnView>;

  @Field(() => [FilterPropertyMetadata], { nullable: false })
  possibleFilters: Array<FilterPropertyMetadata>;
}

@ObjectType()
export class FilterPropertyMetadata {
  @Field()
  name: string;

  @Field()
  type: string;

  @Field(() => [String])
  operators: string[];
}
