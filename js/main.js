class TodoItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = { editable: false };
      this.toggleEditMode = this.toggleEditMode.bind(this);
      this.handleUpdate = this.handleUpdate.bind(this);
    }
  
    toggleEditMode() {
      this.setState({ editable: !this.state.editable });
    }
  
    handleUpdate() {
      const input = this.refs.editInput;
      this.props.onItemUpdate(input.getAttribute("data-index"), input.value);
      this.toggleEditMode();
    }
  
    render() {
      return this.state.editable ? this.renderEditMode() : this.renderViewMode();
    }
  
    renderViewMode() {
      return (
        <div className="todoitem d-flex justify-content-between">
          <span className="clickable" onClick={this.props.onItemCompleted}>
            <input
              type="checkbox"
              className="mr-1"
              checked={this.props.completed}
            />
            {this.props.completed === true ? (
              <span>
                <del>{this.props.itemName}</del>
              </span>
            ) : (
              <span>{this.props.itemName}</span>
            )}
          </span>
          <span>
            <button className="btn mr-1" onClick={this.toggleEditMode}>
              ✒️
            </button>
            <button className="btn btn-danger" onClick={this.props.onItemDelete}>
              🗑️
            </button>
          </span>
        </div>
      );
    }
  
    renderEditMode() {
      return (
        <div className="todoitem d-flex justify-content-between">
          <input
            className="form-control col-10"
            type="text"
            data-index={this.props.index}
            ref="editInput"
            autoFocus
            placeholder="編輯待辦事項"
            defaultValue={this.props.itemName}
            onBlur={this.handleUpdate}
            onKeyDown={e => {
              if (e.keyCode === 27) {
                e.preventDefault();
                this.toggleEditMode();
              } else if (e.keyCode === 13) {
                e.preventDefault();
                this.handleUpdate();
              }
            }}
          />
          <button className="btn btn-danger" onClick={this.props.onItemDelete}>
            🗑️
          </button>
        </div>
      );
    }
  }
  
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
  
  class InputField extends React.Component {
    render() {
      return (
        <div className="input-field form-row justify-content-center">
          <input
            value={this.props.value}
            type="text"
            placeholder="新增待辦事項"
            onChange={this.props.onInputChange}
            onKeyPress={this.props.onInputEnter}
            className="form-control col-10"
          />
          <button
            className="btn btn-primary col-1 ml-1"
            onClick={this.props.onInputSubmit}
          >
            新增
          </button>
        </div>
      );
    }
  }
  
  function TodoHeader(props) {
    return (
      <div className="jumbotron">
        <h1>{props.todoName}</h1>
        <p>尚有 {props.todoCount} 件未完成待辦事項</p>
      </div>
    );
  }
  
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
  
  const todoArray = [
    {
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
  
  ReactDOM.render(
    <TodoApp todos={todoArray} todoName="某某人的待辦事項" />,
    document.getElementById("root")
  ); 