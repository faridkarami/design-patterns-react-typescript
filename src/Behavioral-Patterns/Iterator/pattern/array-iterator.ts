import Iterator from './interfaces/iterator.interface';

export default class ArrayIterator<T> implements Iterator<T> {
  private collection: T[];
  private position: number = 0;

  constructor(collection: T[]) {
    this.collection = collection;
  }

  next(): T | null {
    if (this.hasNext()) {
      return this.collection[this.position++];
    }
    return null;
  }

  hasNext(): boolean {
    return this.position < this.collection.length;
  }
}
