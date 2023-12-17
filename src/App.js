import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Task from './components/Task';

function App() {
  const [tasks,setTask] = useState(
    [
        {
            id:1,
            text:'Ducati',
            day:'sunday',
            reminder: false,
        },
        {
            id:2,
            text:'Honda',
            day:'Monday',
            reminder: false,
        },
        {
            id:3,
            text:'Kawasaki',
            day:'Tuesday',
            reminder: false,
        }
    ]
)

// Delte Task
const deleteTask = (id)=>{
  setTask(tasks.filter((task)=>task.id!==id));
}

// Toggle Reminder
const toggleReminder = (id)=>{
  setTask(tasks.map((task)=>task.id===id ? {...task,reminder:!task.reminder} : task))
}

  return (
 
    <>
     <div className='d-flex border border-2 border-primary  flex-column justify-content-center align-items-center bg-light vh-100'>
  
     <div className='w-50 rounded bg-white border shadow p-4'>
     <Header />
     {tasks.length > 0 ?<Task tasks={tasks} onDelete= {deleteTask} onToggle={toggleReminder} />: 'No Task To Show'}



     
     </div>
     </div>
   

    </>
  );
}

export default App;
