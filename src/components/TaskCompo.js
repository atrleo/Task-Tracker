import React from 'react'

function TaskCompo({ tasks,onDelete,onToggle}) {
  return (
    <div style={{ marginTop: '10px' }}>
      <div className="card d-flex flex-row mb-2 bg-light">
        <div className="card-body" style={{ border: `1px solid ${tasks.reminder? 'green': "white" }` }}  onDoubleClick={()=>onToggle(tasks.id)}>
          <h4>{tasks.text}</h4>
          <p>{tasks.day}</p>
   
         
        </div>
        <div style={{ padding: '10px' }}>
          <button onClick={()=>onDelete(tasks.id)} style={{ border: 'none', background: 'rgba(255, 255, 255, 0.5)' }}>
            <i className="fa-solid fa-trash" style={{ color: "#ab0d1d", margin: '30px 10px ' }}></i>
          </button> 
        </div>
      </div>
    </div>
   
  )
}

export default TaskCompo
