import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';

function App() {
  const[showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTask] = useState([]);

  useEffect(()=>{
    const getTask = async ()=>{
      const taskFromServer = await fetchTask();
      setTask(taskFromServer);
    }
    getTask();
  },[])

// Fetch Tasks
const fetchTask = async()=>{
  const res = await fetch("http://localhost:3008/tasks")
  const data = await res.json();
 return data
}
const fetchTasks = async(id)=>{
  const res = await fetch(`http://localhost:3008/tasks/${id}`)
  const data = await res.json();
 return data
}

// Add Task
  const addTask =async(task)=>{
    const res = await fetch('http://localhost:3008/tasks',{
      method:'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(task)
    }
    )
    const data = await res.json();
    setTask([...tasks,data])
  }



// Delte Task
const deleteTask = async (id)=>{
  await fetch(`http://localhost:3008/tasks/${id}`,{
    method:'DELETE',
  })
  setTask(tasks.filter((task)=>task.id!==id));
}

// Toggle Reminder
const toggleReminder = async (id)=>{
  const taskToToggle = await fetchTasks(id)
  const updTasks = {...taskToToggle,reminder:!taskToToggle.reminder}
  const res = await fetch(`http://localhost:3008/tasks/${id}`,{
    method : 'PUT',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(updTasks)  

  })
  const data =await res.json();

  setTask(tasks.map((task)=>task.id===id ? {...task,reminder:data.reminder} : task))
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
