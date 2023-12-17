import React, { useState } from 'react'
import TaskCompo from './TaskCompo'





function Task({tasks,onDelete,onToggle}) {

   


  return (
    <div>
        {tasks.map((task,id)=>(
            <TaskCompo key={id} tasks={task} onDelete={onDelete} onToggle={onToggle}  />
        ))}
    </div>
  )
}

export default Task
