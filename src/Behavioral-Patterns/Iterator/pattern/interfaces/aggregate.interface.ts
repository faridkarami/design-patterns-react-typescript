import Iterator from './iterator.interface';

export default interface Aggregate<T> {
  createIterator(): Iterator<T>;
}