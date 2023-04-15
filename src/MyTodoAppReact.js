import React, {useState} from 'react'
import Input from './components/Input';
import CheckTodo from './components/CheckTodo';

let initialState = [
  {data: 'work', isActive: true, key: 0},
  {data: 'chill', isActive: false, key: 1},
  {data: 'potatoes', isActive: false, key: 2}
] 

function MyTodoAppReact() {

  const [currentTasks, setCurrentTasks] = useState(initialState) 
  
  return (
    <div className = 'flex border-2 rounded-2xl border-slate-400 bg-slate-100 flex-col'>
      <div className = 'flex p-4 flex-col'>
      <Input
        setCurrentTasks = {setCurrentTasks}
      />
      <CheckTodo
      currentTasks = {currentTasks}
      setCurrentTasks = {setCurrentTasks}
      />
      </div>
    </div>
  );
}

export default MyTodoAppReact;
