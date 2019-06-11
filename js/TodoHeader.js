import React from 'react'

function TodoHeader(props) {
    return (
      <div className="jumbotron">
        <h1>{props.todoName}</h1>
        <p>尚有 {props.todoCount} 件未完成待辦事項</p>
      </div>
    );
  }
export default TodoHeader