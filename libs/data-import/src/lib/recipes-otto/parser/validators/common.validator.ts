import {
  IsString,
  IsArray,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class TextNode {
  @IsString()
  type!: 'text';

  @IsString()
  value!: string;
}

export class LinkNode {
  @IsString()
  type!: 'link';

  @IsString()
  url!: string;

  @IsString()
  title!: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TextNode)
  children!: TextNode[];
}

export class ParagraphNode {
  @IsString()
  type!: 'paragraph';

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NodeUnion)
  children!: (TextNode | LinkNode)[];
}


export class ListItem {
  @IsString()
  type!: 'list-item';

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TextNode)
  children!: TextNode[];
}

export class ListNode {
  @IsString()
  listType!: 'ordered' | 'unordered';

  @IsString()
  type!: 'list';

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ListItem)
  children!: ListItem[];
}

// This type is needed to handle the union type in ParagraphNode
class NodeUnion {
  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  value?: string;

  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TextNode)
  children?: TextNode[];
}
