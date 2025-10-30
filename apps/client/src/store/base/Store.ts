import { makeAutoObservable, runInAction } from 'mobx';

export interface StoreOptions {
  autoLoad?: boolean;
}

export abstract class Store<T> {
  data: T | null = null;
  isLoading = false;
  error: Error | null = null;
  lastUpdated: number | null = null;

  constructor(options: StoreOptions = {}) {
    makeAutoObservable(this);

    if (options.autoLoad) {
      this.load();
    }
  }

  // Abstract methods to be implemented by derived classes
  protected abstract fetchData(): Promise<T>;

  // Optional method for saving data
  protected async saveData(data: T): Promise<T> {
    throw new Error('saveData not implemented');
  }

  async load(): Promise<void> {
    if (this.isLoading) return;

    runInAction(() => {
      this.isLoading = true;
      this.error = null;
    });

    try {
      const data = await this.fetchData();
      runInAction(() => {
        this.data = data;
        this.lastUpdated = Date.now();
      });
    } catch (error) {
      runInAction(() => {
        this.error = error as Error;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async save(data?: Partial<T>): Promise<void> {
    if (this.isLoading) return;

    runInAction(() => {
      this.isLoading = true;
      this.error = null;
    });

    try {
      // If data is provided, merge it with existing data
      const updatedData = data
        ? { ...this.data, ...data } as T
        : this.data as T;

      // Save to server
      const result = await this.saveData(updatedData);

      runInAction(() => {
        this.data = result;
        this.lastUpdated = Date.now();
      });
    } catch (error) {
      runInAction(() => {
        this.error = error as Error;
      });
      throw error;
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  update(updater: (data: T) => void): void {
    if (!this.data) return;

    const newData = { ...this.data } as T;
    updater(newData);

    runInAction(() => {
      this.data = newData;
    });
  }

  reset(): void {
    runInAction(() => {
      this.data = null;
      this.error = null;
      this.lastUpdated = null;
    });
  }
}
