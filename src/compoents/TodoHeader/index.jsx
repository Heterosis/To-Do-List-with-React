import React from 'react';

const TodoHeader = (props) => {
  const { todoName, todoCount } = props;

  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <h1>{todoName}</h1>
      <p>
        尚有
        {todoCount}
        {' '}
        件未完成待辦事項
      </p>
    </div>
  );
};

export default TodoHeader;
