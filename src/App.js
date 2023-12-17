import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';

function App() {
  const[showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTask] = useState(
    [
        {
            id:1,
            text:'Ducati',
            day:'Jan 20th at 10:10am ',
            reminder: false,
        },
        {
            id:2,
            text:'Honda',
            day:'Dec 20th at 11:15am',
            reminder: false,
        },
        {
            id:3,
            text:'Kawasaki',
            day:'Dec 21th at 3:10am',
            reminder: false,
        }
    ]
)

// Add Task
  const addTask = (task)=>{
  const id = Math.floor(Math.random()*1000)+1
  const newTask = {id,...task};
  setTask([...tasks,newTask]);


  }

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
     <div className='d-flex flex-column justify-content-center align-items-center bg-light p-5 vh-100  '>
  
     <div className='w-50 rounded bg-white border shadow p-4 mt-4' style={{ overflow: 'auto' }} >
     <Header onShow={()=>setShowAddTask(!showAddTask)}  showAddTask={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask} />}
     {tasks.length > 0 ?<Task tasks={tasks} onDelete= {deleteTask} onToggle={toggleReminder} />: 'No Task To Show'}



     
     </div>
     </div>
   

    </>
  );
}

export default App;
