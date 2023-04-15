import React from 'react'

export default function Todo({currentTasks, setCurrentTasks}) {

  return(
    <div className='flex flex-col pt-4'>
    {/* {data: 'work', isActive: true, key: 0} */}
        {currentTasks.map(t => (
          <div 
          className ={`${t.isActive ? '' : 'line-through'} flex capitalize px-3`} 
          key = {t.key} > 
            <input 
            type="checkbox"
            checked={!t.isActive}
            onChange={() => {
              setCurrentTasks((x) => {
                let updatedTasks = []
                for(let i=0; i<x.length; i++){
                  if(t.key === x[i].key){
                    let toggledEntry = x[i]
                    toggledEntry.isActive = !toggledEntry.isActive
                    updatedTasks.push(toggledEntry)
                  } else {
                    updatedTasks.push(x[i])
                  }
                }
                return updatedTasks
              })
            }}
            /> {t.data}
          </div>
        ))}
    </div>
  )
}