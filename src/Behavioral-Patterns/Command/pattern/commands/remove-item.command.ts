import CommandInvoker from '../command-invoker';
import ICommand from '../interfaces/command.interface';
import Item from '../interfaces/item.interface';
import utils from './utils';

export default class RemoveItemCommand implements ICommand {
  private item: Item;
  private invoker: CommandInvoker;

  constructor(todoList: CommandInvoker, item: Item) {
    this.invoker = todoList;
    this.item = item;
  }

  execute(): void {
    utils.delete(this.invoker, this.item);
  }

  undo(): void {
    utils.insert(this.invoker, this.item);
  }
}
