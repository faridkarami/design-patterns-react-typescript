import CommandInvoker from '../command-invoker';
import Item from '../interfaces/item.interface';

const utils = {
  insert: (invoker: CommandInvoker, item: Item) => invoker['items'].push(item),
  delete: (invoker: CommandInvoker, item: Item) =>
    (invoker['items'] = invoker['items'].filter((x) => x.id !== item.id)),
};

export default utils;