export default interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
}