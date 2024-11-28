import React, { useState } from 'react';
import AddTodoCommand from '../pattern/commands/add-item.command';
import RemoveTodoCommand from '../pattern/commands/remove-item.command';
import CommandInvoker from '../pattern/command-invoker';
import useKeyboardShortcuts from './useKeyboardShortcuts.hook';
import Item from '../pattern/interfaces/item.interface';

const TodoList: React.FC = () => {
  const [itemTitle, setItemTitle] = useState('');
  const [items, setItems] = useState<Item[]>([]);
  const [todoList] = useState(new CommandInvoker());

  const handleAdd = () => {
    if (!itemTitle.trim()) return;

    const addCommand = new AddTodoCommand(todoList, itemTitle);
    todoList.executeCommand(addCommand);
    setItems(todoList.get());
    setItemTitle('');
  };

  const handleRemove = (item: Item) => {
    const removeCommand = new RemoveTodoCommand(todoList, item);
    todoList.executeCommand(removeCommand);
    setItems(todoList.get());
  };

  const handleUndo = () => {
    todoList.undo();
    setItems(todoList.get());
  };

  const handleRedo = () => {
    todoList.redo();
    setItems(todoList.get());
  };

  useKeyboardShortcuts(handleAdd, handleUndo, handleRedo);

  return (
    <div>
      <input
        type='text'
        value={itemTitle}
        onChange={(e) => setItemTitle(e.target.value)}
        placeholder='Add new todo'
      />
      <button onClick={handleAdd}>Add Todo</button>
      <button onClick={handleUndo} disabled={todoList.historyIndex < 0}>
        Undo
      </button>
      <button onClick={handleRedo} disabled={todoList.historyIndex >= todoList.history.length - 1}>
        Redo
      </button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.title}
            <button onClick={() => handleRemove(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
