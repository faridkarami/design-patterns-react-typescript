import { IMemoryAdapter } from "./memory-adapter.interface";

export class LocalStorageAdapter<T> implements IMemoryAdapter<T> {
  private storageKey: string;

  constructor(storageKey: string) {
    this.storageKey = storageKey;
  }

  load(): T[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? (JSON.parse(data) as T[]) : [];
  }

  save(items: T[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }
}
