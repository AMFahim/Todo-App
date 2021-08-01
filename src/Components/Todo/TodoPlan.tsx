import React from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IPlan {
  todo: string,
  handleRemove: (todo: string) => void
}
const TodoPlan = ({ todo, handleRemove }: IPlan) => {
  return (
    <div>
      <div className="App pt-3 container">
      <div className="bg-white d-grid gap-2">
        <p>{todo}</p>
        <button onClick={() => handleRemove(todo)} className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></button>
      </div>
    </div>
    </div>
  );
};

export default TodoPlan;