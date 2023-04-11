import React, {useState} from 'react'
import Todo from './components/Todo';


function MyTodoAppReact() {

  const [currentTasks, setCurrentTasks] = useState("")

  return (
    <div className = 'flex flex-col'>
      <div className = 'flex flex-row items-end'>
      <button className = 'flex px-2 py-1 border-2 rounded-xl border-slate-300 text-3xl'>To Do!</button>
      <Todo
        currentTask = {currentTasks}
      />
      </div>
    </div>
  );
}

export default MyTodoAppReact;
