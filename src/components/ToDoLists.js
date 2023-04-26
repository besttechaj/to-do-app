import React from 'react';

const ToDoLists = (props) => {
  return (
    <div className='todo_style'>
      <li>{props.text}</li>

      <button
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default ToDoLists;
