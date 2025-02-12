import * as fs from 'node:fs/promises';

export async function readJsonFile<T>(filePath: string): Promise<T> {
  try {
    console.log(`Reading JSON file: ${filePath}`);
    const rawData = await fs.readFile(filePath, 'utf8');
    return JSON.parse(rawData);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error reading JSON file ${filePath}: ${error.message}`);
    }
    throw error;
  }
}


export class Logger {
  constructor(private readonly context: string) {}

  private formatMessage(message: string, meta?: unknown): string {
    const timestamp = new Date().toISOString();
    const metaString = meta ? `\n${JSON.stringify(meta, null, 2)}` : '';
    return `[${timestamp}] [${this.context}] ${message}${metaString}`;
  }

  info(message: string, meta?: unknown) {
    console.log(this.formatMessage(message, meta));
  }

  warn(message: string, meta?: unknown) {
    console.warn(this.formatMessage(message, meta));
  }

  error(message: string, meta?: unknown) {
    console.error(this.formatMessage(message, meta));
  }
}
