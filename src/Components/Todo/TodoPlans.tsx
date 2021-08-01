import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import TodoPlan from './TodoPlan';

interface ITodo {
  todo: string
}

const TodoPlans = () => {

  const [todoPlan, setTodoPlan] = useState<ITodo>({} as ITodo)
  const [todoPlanList, setTodoPlanList] = useState<ITodo[]>([])


  const handleAdd = () => {
    setTodoPlanList([...todoPlanList, todoPlan])
    setTodoPlan({
      todo: ""
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoPlan({ ...todoPlan, [e.target.name]: e.target.value })
  }

  const handleRemove = (todo: string) => {
    const newTodoPlanList = todoPlanList.filter(p => p.todo !== todo)
    setTodoPlanList(newTodoPlanList)
  }
  return (
    <div className="pt-5">
      <div className="App display-flex">
        <h3 className="pb-3">What's The Plan For Today?</h3>
        <input onChange={handleChange} className="for-input rounded-start" type="text" placeholder="Add a todo" name="todo" required />
        <button className="for-btn btn-primary" onClick={handleAdd}><FontAwesomeIcon icon={faPlus} /></button>
      </div>
      {
        todoPlanList.map((plan) => <TodoPlan todo={plan.todo} key={plan.todo} handleRemove={handleRemove}></TodoPlan>)
      }
    </div>
  );
};

export default TodoPlans;