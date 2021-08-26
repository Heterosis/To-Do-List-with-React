import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'css/index.css';
import App from 'compoents/App';

library.add(fab, fas);

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
