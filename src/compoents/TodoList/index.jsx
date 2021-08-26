import React from 'react';
import hash from 'object-hash';

import TodoItem from './TodoItem';

const TodoList = (props) => {
  const {
    todos, onItemCompleted, onItemDelete, onItemUpdate,
  } = props;

  const todoItems = todos.map((item, index) => (
    <TodoItem
      index={index}
      itemName={item.itemName}
      key={hash(item)}
      completed={item.completed}
      onItemCompleted={onItemCompleted}
      onItemDelete={onItemDelete}
      onItemUpdate={onItemUpdate}
    />
  ));

  return <form>{todoItems}</form>;
};

export default TodoList;
