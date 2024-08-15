import { InputType, Field, Int } from '@nestjs/graphql';
import { UpdateColumnViewInput } from './update-column-view.input';

@InputType()
export class UpdateTableViewDefinitionInput {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  order?: number;

  @Field(() => String, { nullable: true })
  icon?: string;

  @Field(() => String, { nullable: true })
  filters?: string;

  @Field(() => String, { nullable: true })
  sorting?: string;

  @Field(() => [UpdateColumnViewInput], { nullable: true })
  columns?: UpdateColumnViewInput[];

  @Field(() => Boolean, { nullable: true })
  isPreset?: boolean;

  @Field(() => Boolean, { nullable: true })
  isShared?: boolean;
}
