import React from 'react'
import TodoHeader from './TodoHeader'
import InputField from './InputField'
import TodoList from './TodoList'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos,
      input: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputEnter = this.handleInputEnter.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleItemCompleted = this.handleItemCompleted.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleItemUpdate = this.handleItemUpdate.bind(this);
  }

  handleInputChange(e) {
    this.setState({ input: e.target.value });
  }

  handleInputSubmit() {
    if (this.state.input === "") {
      return;
    } else {
      let temp = [...this.state.todos];
      temp.push({ itemName: this.state.input, completed: false });
      this.setState({
        todos: temp,
        input: ""
      });
    }
  }

  handleInputEnter(e) {
    if (e.key === "Enter") {
      this.handleInputSubmit();
    }
  }

  handleItemCompleted(index) {
    let temp = [...this.state.todos];
    temp[index].completed = !temp[index].completed;
    this.setState({
      todos: temp
    });
  }

  handleItemDelete(index) {
    let temp = this.state.todos
      .slice(0, index)
      .concat(this.state.todos.slice(index + 1));
    this.setState({
      todos: temp
    });
  }

  handleItemUpdate(index, value) {
    let temp = [...this.state.todos];
    temp[index].itemName = value;
    this.setState({
      todos: temp
    });
  }

  render() {
    return (
      <div>
        <TodoHeader
          todoName={this.props.todoName}
          todoCount={
            this.state.todos.filter(item => {
              return item.completed === false;
            }).length
          }
        />
        <InputField
          value={this.state.input}
          onInputEnter={this.handleInputEnter}
          onInputChange={this.handleInputChange}
          onInputSubmit={this.handleInputSubmit}
        />
        <TodoList
          todos={this.state.todos}
          onItemCompleted={this.handleItemCompleted}
          onItemDelete={this.handleItemDelete}
          onItemUpdate={this.handleItemUpdate}
        />
      </div>
    );
  }
}
export default TodoApp