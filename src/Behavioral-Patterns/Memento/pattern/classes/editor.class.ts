import Memento from './memento.class';

export default class Editor {
  private state: string = '';

  public setState(state: string): void {
    this.state = state;
  }

  public getState(): string {
    return this.state;
  }

  public saveStateToMemento(): Memento {
    return new Memento(this.state);
  }

  public restoreStateFromMemento(memento: Memento): void {
    this.state = memento.getState();
  }
}
