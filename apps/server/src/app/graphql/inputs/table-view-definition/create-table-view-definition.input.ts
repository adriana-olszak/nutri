import { InputType, Field, Int } from '@nestjs/graphql';
import { CreateColumnViewInput } from './create-column-view.input';

@InputType()
export class CreateTableViewDefinitionInput {
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

  @Field(() => [CreateColumnViewInput])
  columns: CreateColumnViewInput[];

  @Field(() => Boolean)
  isPreset: boolean;

  @Field(() => Boolean)
  isShared: boolean;
}
