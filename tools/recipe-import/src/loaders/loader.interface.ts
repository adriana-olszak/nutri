export interface DataLoader<T> {
  load(): Promise<T[]>;
}
