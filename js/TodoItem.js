import React from 'react'

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

export default TodoItem