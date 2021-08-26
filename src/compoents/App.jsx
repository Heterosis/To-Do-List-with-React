import React, { useState } from 'react';
import _ from 'lodash';
import { Container } from 'react-bootstrap';

import TodoHeader from './TodoHeader';
import InputField from './InputField';
import TodoList from './TodoList';

const App = (props) => {
  const { todos, todoname } = props;
  const [currentTodos, setCurrentTodos] = useState(todos);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = () => {
    if (!_.isEmpty(input)) {
      setCurrentTodos((pre) => [...pre, { itemName: input, completed: false }]);
      setInput('');
    }
  };

  const handleInputEnter = (e) => {
    if (e.key === 'Enter') {
      handleInputSubmit();
    }
  };

  const handleItemCompleted = (index) => {
    setCurrentTodos((pre) => {
      const newTodos = _.cloneDeep(pre);
      newTodos[index].completed = !newTodos[index].completed;

      return newTodos;
    });
  };

  const handleItemDelete = (targetIndex) => {
    setCurrentTodos((pre) => pre.filter((value, index) => index !== targetIndex));
  };

  const handleItemUpdate = (index, newValue) => {
    setCurrentTodos((pre) => {
      const newTodos = _.cloneDeep(pre);
      newTodos[index].itemName = newValue;

      return newTodos;
    });
  };

  return (
    <Container fluid>
      <TodoHeader
        todoName={todoname}
        todoCount={currentTodos.filter((todo) => !todo.completed).length}
      />
      <InputField
        value={input}
        onInputEnter={handleInputEnter}
        onInputChange={handleInputChange}
        onInputSubmit={handleInputSubmit}
      />
      <TodoList
        todos={currentTodos}
        onItemCompleted={handleItemCompleted}
        onItemDelete={handleItemDelete}
        onItemUpdate={handleItemUpdate}
      />
    </Container>
  );
};

export default App;
