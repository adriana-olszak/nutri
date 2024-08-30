import * as fs from 'fs';
import { ParserType } from './config';


export function getParser(type: ParserType) {
  switch (type) {
    case 'json':
      return {
        parse<File>(filePath: string): string {
          const fileContent = fs.readFileSync(filePath, 'utf8');
          return JSON.parse(fileContent);
        }
      };
    default:
      throw new Error(`Unsupported parser type: ${type}`);
  }
}
