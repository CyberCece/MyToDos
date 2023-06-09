import React from 'react'

export default function Filters({ setCurrentTasks, setFilter}) {
  
  return(
    <div className='flex flex-row justify-evenly pt-4'>
      <button
        className='flex py-1 px-2 rounded-xl bg-slate-200  border-b-2 border-slate-400'
        onClick = {() => {
          setFilter(() => "All")
          
        }}
      >
        All
      </button>
      <button
        className='flex py-1 px-2 rounded-xl bg-slate-200  border-b-2 border-slate-400'
        onClick = {() => {
          setFilter(() => "Checked")
        }}
      >
        Checked
      </button>
      <button
        className='flex py-1 px-2 rounded-xl bg-slate-200  border-b-2 border-slate-400'
        onClick = {() => {
          setFilter(() => "Unchecked")
        }}
      >
        Unchecked
      </button>
      <button
        className='flex py-1 px-2 rounded-xl bg-slate-200  border-b-2 border-slate-400'
        onClick={() => {
          setCurrentTasks((x) => {
            return clearChecked(x)
          })
        }}
      >
        Clear
      </button>
    </div>
  )
}

function clearChecked(todos){
  let newState = []
  for(let i=0; i<todos.length; i++){
    if(todos[i].isActive === true){
      newState.push(todos[i])
    }
  }
  return newState
}