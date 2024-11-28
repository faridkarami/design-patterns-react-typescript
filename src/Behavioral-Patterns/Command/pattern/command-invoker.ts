import Command from './interfaces/command.interface';
import Item from './interfaces/item.interface';

export default class CommandInvoker {
  private items: Item[] = [];
  public history: Command[] = [];
  public historyIndex: number = -1;

  get(): Item[] {
    return [...this.items];
  }

  executeCommand(command: Command): void {
    if (this.historyIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.historyIndex + 1);
    }
    command.execute();
    this.history.push(command);
    this.historyIndex++;
  }

  undo(): void {
    if (this.historyIndex >= 0) {
      this.history[this.historyIndex].undo();
      this.historyIndex--;
    }
  }

  redo(): void {
    if (this.historyIndex < this.history.length - 1) {
      this.historyIndex++;
      this.history[this.historyIndex].execute();
    }
  }
}
