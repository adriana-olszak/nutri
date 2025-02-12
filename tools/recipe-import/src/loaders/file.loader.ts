import { readJsonFile } from "../utils";
import { DataLoader } from "./loader.interface";

export class JsonFileLoader<T> implements DataLoader<T> {
  constructor(private readonly filePath: string) {}

  async load(): Promise<T[]> {
    return readJsonFile<T[]>(this.filePath);
  }
}
