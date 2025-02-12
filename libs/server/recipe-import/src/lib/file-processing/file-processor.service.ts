import { Injectable } from '@nestjs/common';
import { JsonProcessor } from './processors/json-processor';
import { TextProcessor } from './processors/text-processor';
import { FileProcessingError, FileProcessor, FileProcessorOptions, FileType } from './types';

@Injectable()
export class FileProcessorService {
  private processors: FileProcessor[];

  constructor(
    readonly jsonProcessor: JsonProcessor,
    readonly textProcessor: TextProcessor,
  ) {
    this.processors = [
      jsonProcessor,
      textProcessor,
    ];
  }

  async processFile(
    file: Express.Multer.File,
    fileType: FileType,
    options?: FileProcessorOptions
  ) {
    const processor = this.processors.find(p => p.canProcess(fileType));

    if (!processor) {
      throw new FileProcessingError(
        `Unsupported file type: ${fileType}`,
        'UNSUPPORTED_FILE_TYPE'
      );
    }

    return processor.process(file, options);
  }
}
