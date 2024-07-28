import * as csv from 'csv-parse/sync';
import * as fs from 'fs';
import * as xml2js from 'xml2js';

export interface Parser {
  parse(filePath: string): Promise<Record<string, any>[]>;
}

export class CSVParser implements Parser {
  async parse(filePath: string): Promise<Record<string, any>[]> {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      return csv.parse(fileContent, { columns: true });
    } catch (error) {
      throw new Error(`Error parsing CSV file: ${error.message}`);
    }
  }
}

export class XMLParser implements Parser {
  async parse(filePath: string): Promise<Record<string, any>[]> {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const parser = new xml2js.Parser({ explicitArray: false, mergeAttrs: true });
      const result = await parser.parseStringPromise(fileContent);
      // Assuming the XML has a root element and the data is in an array
      return result.root.item;
    } catch (error) {
      throw new Error(`Error parsing XML file: ${error.message}`);
    }
  }
}

export function getParser(type: 'csv' | 'xml'): Parser {
  switch (type) {
    case 'csv':
      return new CSVParser();
    case 'xml':
      return new XMLParser();
    default:
      throw new Error(`Unsupported parser type: ${type}`);
  }
}
