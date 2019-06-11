import React from 'react'

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
export default InputField