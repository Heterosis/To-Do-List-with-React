import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './TodoApp'

const todoArray = [{
    itemName: "Buy something",
    completed: false
  },
  {
    itemName: "Do something",
    completed: false
  },
  {
    itemName: "Make something",
    completed: false
  },
  {
    itemName: "Take something",
    completed: true
  }
];
ReactDOM.render( <
  TodoApp todos = {
    todoArray
  }
  todoName = "某某人的待辦事項" / > ,
  document.getElementById("root")
);