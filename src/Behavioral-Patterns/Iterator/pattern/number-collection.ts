import ArrayIterator from './array-iterator';
import Aggregate from './interfaces/aggregate.interface';
import Iterator from './interfaces/iterator.interface';

export default class NumberCollection implements Aggregate<number> {
  private numbers: number[];

  constructor(numbers: number[]) {
    this.numbers = numbers;
  }

  createIterator(): Iterator<number> {
    return new ArrayIterator(this.numbers);
  }
}
