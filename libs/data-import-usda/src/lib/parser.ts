import * as fs from 'fs';

export function getParser(type: 'json') {
  switch (type) {
    case 'json':
      return {
        parse(filePath: string): unknown {
          const fileContent = fs.readFileSync(filePath, 'utf8');
          return  JSON.parse(fileContent);
        }
      };
    default:
      throw new Error(`Unsupported parser type: ${type}`);
  }
}
