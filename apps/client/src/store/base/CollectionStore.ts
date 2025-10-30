import { makeAutoObservable, runInAction } from 'mobx';

export interface CollectionStoreOptions {
  autoLoad?: boolean;
}

export abstract class CollectionStore<T, K = string> {
  items = new Map<K, T>();
  isLoading = false;
  error: Error | null = null;
  lastUpdated: number | null = null;

  constructor(options: CollectionStoreOptions = {}) {
    makeAutoObservable(this);

    if (options.autoLoad) {
      this.load();
    }
  }

  // Abstract methods to be implemented by derived classes
  protected abstract fetchItems(): Promise<T[]>;
  protected abstract getItemId(item: T): K;

  // Optional method for adding items
  protected async addItem(item: T): Promise<T> {
    throw new Error('addItem not implemented');
  }

  // Optional method for updating items
  protected async updateItem(id: K, item: T): Promise<T> {
    throw new Error('updateItem not implemented');
  }

  // Optional method for removing items
  protected async removeItem(id: K): Promise<boolean> {
    throw new Error('removeItem not implemented');
  }

  async load(): Promise<void> {
    if (this.isLoading) return;

    runInAction(() => {
      this.isLoading = true;
      this.error = null;
    });

    try {
      const items = await this.fetchItems();

      runInAction(() => {
        this.items.clear();
        items.forEach(item => {
          const id = this.getItemId(item);
          this.items.set(id, item);
        });
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

  async add(item: T): Promise<T> {
    if (this.isLoading) throw new Error('Store is currently loading');

    runInAction(() => {
      this.isLoading = true;
      this.error = null;
    });

    try {
      const result = await this.addItem(item);
      const id = this.getItemId(result);

      runInAction(() => {
        this.items.set(id, result);
        this.lastUpdated = Date.now();
      });

      return result;
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

  async update(id: K, updates: Partial<T>): Promise<T> {
    if (this.isLoading) throw new Error('Store is currently loading');
    if (!this.items.has(id)) throw new Error(`Item with id ${String(id)} not found`);

    const item = this.items.get(id) as T;
    const updatedItem = { ...item, ...updates } as T;

    runInAction(() => {
      this.isLoading = true;
      this.error = null;
      // Optimistic update
      this.items.set(id, updatedItem);
    });

    try {
      const result = await this.updateItem(id, updatedItem);

      runInAction(() => {
        this.items.set(id, result);
        this.lastUpdated = Date.now();
      });

      return result;
    } catch (error) {
      // Revert optimistic update
      runInAction(() => {
        this.items.set(id, item);
        this.error = error as Error;
      });
      throw error;
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async remove(id: K): Promise<boolean> {
    if (this.isLoading) throw new Error('Store is currently loading');
    if (!this.items.has(id)) throw new Error(`Item with id ${String(id)} not found`);

    const item = this.items.get(id);

    runInAction(() => {
      this.isLoading = true;
      this.error = null;
      // Optimistic delete
      this.items.delete(id);
    });

    try {
      const success = await this.removeItem(id);

      if (!success) {
        // Revert if server returned false
        runInAction(() => {
          if (item) this.items.set(id, item);
        });
      }

      runInAction(() => {
        this.lastUpdated = Date.now();
      });

      return success;
    } catch (error) {
      // Revert optimistic delete
      runInAction(() => {
        if (item) this.items.set(id, item);
        this.error = error as Error;
      });
      throw error;
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  get(id: K): T | undefined {
    return this.items.get(id);
  }

  getAll(): T[] {
    return Array.from(this.items.values());
  }

  reset(): void {
    runInAction(() => {
      this.items.clear();
      this.error = null;
      this.lastUpdated = null;
    });
  }
}
