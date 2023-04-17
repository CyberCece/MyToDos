import React, {useState} from 'react'


export default function Input({setCurrentTasks}) {

  const [task, setTasks] = useState("")
  const [keyNumber, setKeyNumber] = useState(3) 

  return(
    <div className='flex pb-4'>
      <input className='flex px-2 min-w-[350px] w-full h-full min-h-[50px] text-3xl text-center rounded-xl bg-slate-50  border-b-2 border-slate-300'
      placeholder='So many things to do!'
      type='text'
      value = {task}
      onChange={(event) => {
        setTasks(() => {
          return(event.target.value)
        })
      }}
      onKeyDown={ (event) => {
        if (event.key === 'Enter') {
          setCurrentTasks((x) => {
            /* {data: 'work', isActive: true, key: 0} */
            let newEntry = {data: task, isActive: true, key: keyNumber} 
            let newTasks = [...x, newEntry]
            setTasks(() => {
              return ""
            })
            setKeyNumber((k) => {
              return k + 1
            })
            return newTasks
          })
        } 
      }}
      />      
    </div>
  )
}