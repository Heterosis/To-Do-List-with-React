import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let todos = this.props.todos;
      let todoItems = todos.map((item, index) => {
        return (
          <TodoItem
            index={index}
            itemName={item.itemName}
            key={item.itemName + index}
            completed={item.completed}
            onItemCompleted={() => this.props.onItemCompleted(index)}
            onItemDelete={() => this.props.onItemDelete(index)}
            onItemUpdate={this.props.onItemUpdate}
          />
        );
      });
      return <form>{todoItems}</form>;
    }
}

export default TodoList