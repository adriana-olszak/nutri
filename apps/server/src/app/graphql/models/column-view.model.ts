import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ColumnViewTypeEnum } from '../enums/column-view-type.enum';

@ObjectType()
export class ColumnView {
  @Field(() => Int)
  columnId: number;

  @Field(() => ColumnViewTypeEnum)
  columnType: ColumnViewTypeEnum;

  @Field(() => Int)
  width: number;

  @Field(() => Boolean)
  visible: boolean;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  filter?: string;
}
