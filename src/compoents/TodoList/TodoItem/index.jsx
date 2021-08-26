import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const TodoItem = (props) => {
  const {
    onItemUpdate, onItemCompleted, onItemDelete, completed, itemName, index,
  } = props;

  const [editable, setEditable] = useState(false);
  const inputRef = useRef(null);

  const toggleEditMode = () => {
    setEditable((pre) => !pre);
  };

  const handleUpdate = () => {
    const input = inputRef.current;
    onItemUpdate(input.getAttribute('data-index'), input.value);
    toggleEditMode();
  };

  useEffect(() => {
    if (editable) {
      inputRef.current.focus();
    }
  }, [editable]);

  if (editable) {
    return (
      <div className="todoitem d-flex justify-content-between">
        <Form.Control
          type="text"
          data-index={index}
          ref={inputRef}
          placeholder="Edit to-do list"
          defaultValue={itemName}
          onBlur={handleUpdate}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              e.preventDefault();
              toggleEditMode();
            } else if (e.key === 'Enter') {
              e.preventDefault();
              handleUpdate();
            }
          }}
        />
        <Button variant="light" className="ms-1" onClick={handleUpdate}>✔️</Button>
        <Button variant="danger" className="ms-1" onClick={() => onItemDelete(index)}>🗑️</Button>
      </div>
    );
  }

  return (
    <div className="todoitem d-flex justify-content-between">
      <Button
        variant={completed ? 'outline-secondary' : 'outline-primary'}
        onClick={() => onItemCompleted(index)}
        className="w-100 py-0 d-flex justify-content-start align-items-center"
      >
        <input
          type="checkbox"
          className="me-2"
          checked={completed}
        />
        {completed === true ? (
          <span>
            <del>{itemName}</del>
          </span>
        ) : (
          <span>{itemName}</span>
        )}
      </Button>
      <div className="d-flex">
        <Button variant="light" className="ms-1" onClick={toggleEditMode}>✒️</Button>
        <Button variant="danger" className="ms-1" onClick={() => onItemDelete(index)}>🗑️</Button>
      </div>
    </div>
  );
};

export default TodoItem;
