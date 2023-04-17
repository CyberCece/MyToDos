import React from 'react'

export default function CheckTodo({currentTasks, setCurrentTasks, filter}) {
  if (currentTasks.length === 0) return "No To-Do's left for you. Go have a cupcake :)"
  return(
    <div className='flex flex-col pt-4'>
    {/* {data: 'work', isActive: true, key: 0} */}
      
      {currentTasks.map(t => {
        const content = <div 
          className='flex flex-row align-center'
          key = {t.key}
          >
            <div 
            className ={`${t.isActive ? '' : 'line-through'} flex capitalize px-3`} 
            > 
              <input 
              type="checkbox"
              checked={!t.isActive}
              onChange={() => {
                setCurrentTasks((x) => {
                  return toggleEntry(x, t)
                })
              }}
              /> {t.data}
            </div>
            <button
            className='flex justify-end'
            onClick = {() => {
              setCurrentTasks((x) => {
                return deleteEntry(x, t)
              })
            }}
            >x</button>
        </div>
        if (filter === "All") return content
        else if (
          filter === "Unchecked" && t.isActive === true
        ) return content
        else if(
          filter === "Checked" && t.isActive === false
        ) return content
        else return null
      })}
    </div>
  )
}

function toggleEntry(todos, currentToDo) {
  let updatedTasks = []
  for(let i=0; i<todos.length; i++){
    if(currentToDo.key === todos[i].key){
      let toggledEntry = {...todos[i], isActive: !todos[i].isActive}
      updatedTasks.push(toggledEntry)
    } else {
      updatedTasks.push(todos[i])
    }
  }
  return updatedTasks

}

function deleteEntry(todos, currentToDo){
  let newState = []
  for(let i=0; i<todos.length; i++){
    if(currentToDo.key !== todos[i].key){
      newState.push(todos[i])
    }
  }
  return newState
}

