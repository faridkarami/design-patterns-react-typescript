export interface IMemoryAdapter<T> {
    load(): T[];
    save(items: T[]): void;
}