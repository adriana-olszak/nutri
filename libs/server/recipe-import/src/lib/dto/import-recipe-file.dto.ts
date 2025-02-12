import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { SUPPORTED_LANGUAGES } from '../constants';

export enum ImportFileType {
  JSON = 'json',
  CSV = 'csv',
  TEXT = 'text'
}

export class ImportRecipeFileDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: unknown;

  @ApiProperty({ enum: ImportFileType })
  @IsEnum(ImportFileType)
  fileType!: ImportFileType;

  @ApiProperty({ enum: SUPPORTED_LANGUAGES, default: 'en' })
  @IsEnum(SUPPORTED_LANGUAGES)
  @IsOptional()
  language?: 'en' | 'pl' = 'en';
}
