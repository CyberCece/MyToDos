import React, {useState} from 'react'
import Input from './components/Input';
import CheckTodo from './components/CheckTodo';
import Filters from './components/Filters' 

function MyTodoAppReact() {

  const [currentTasks, setCurrentTasks] = useState([]) 
  const [filter, setFilter] = useState("All")

  return (
    <div className = 'flex border-2 rounded-2xl border-slate-400 bg-slate-100 flex-col'>
      <div className = 'flex p-4 flex-col'>
      <Input
        setCurrentTasks = {setCurrentTasks}
      />
      <CheckTodo
      currentTasks = {currentTasks}
      setCurrentTasks = {setCurrentTasks}
      filter = {filter}
      />
      <Filters
      setFilter = {setFilter}
      setCurrentTasks = {setCurrentTasks}
      />
      </div>
    </div>
  );
}

export default MyTodoAppReact;
