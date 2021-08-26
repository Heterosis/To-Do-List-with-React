import React from 'react';
import { Button, Form } from 'react-bootstrap';

const InputField = (props) => {
  const {
    value, onInputChange, onInputEnter, onInputSubmit,
  } = props;

  return (
    <div className="input-field d-flex justify-content-center">
      <Form.Control
        value={value}
        type="text"
        placeholder="Add to-do list"
        onChange={onInputChange}
        onKeyPress={onInputEnter}
        className="w-100"
      />
      <Button
        variant="primary"
        className="ms-2"
        onClick={onInputSubmit}
      >
        Add
      </Button>
    </div>
  );
};

export default InputField;
