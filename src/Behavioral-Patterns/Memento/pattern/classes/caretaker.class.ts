import Memento from './memento.class';

export default class Caretaker {
  private mementoList: Memento[] = [];

  public addMemento(memento: Memento): void {
    this.mementoList.push(memento);
  }

  public getMemento(index: number): Memento {
    return this.mementoList[index];
  }
}
