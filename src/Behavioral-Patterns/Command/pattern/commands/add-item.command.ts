import { v4 as uuid } from 'uuid';
import CommandInvoker from '../command-invoker';
import ICommand from '../interfaces/command.interface';
import Item from '../interfaces/item.interface';
import utils from './utils';

export default class AddItemCommand implements ICommand {
  private item: Item;
  private invoker: CommandInvoker;

  constructor(todoList: CommandInvoker, title: string) {
    this.invoker = todoList;
    this.item = {
      id: uuid(),
      title: title,
    };
  }

  execute(): void {
    utils.insert(this.invoker, this.item);
  }

  undo(): void {
    utils.delete(this.invoker, this.item);
  }
}
