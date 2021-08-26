import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'css/index.css';
import App from 'compoents/App';

const todoArray = [
  {
    itemName: 'Buy something',
    completed: false,
  },
  {
    itemName: 'Do something',
    completed: false,
  },
  {
    itemName: 'Make something',
    completed: false,
  },
  {
    itemName: 'Take something',
    completed: true,
  },
];

ReactDOM.render(<App todos={todoArray} todoName="Someone's To-do List" />, document.getElementById('app'));
