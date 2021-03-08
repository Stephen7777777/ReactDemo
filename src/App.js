import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () =>{
  const[showAddTask , setShowAddTask] = useState(false)
  const [tasks , setTasks] = useState([
    {id:1,
      text:'Doctors Appointment',
      day: 'Feb 5th at 2:00pm',
      reminder:true,
     },
     {
       id:2,
       text:'Meeting at School',
       day: 'Feb 6th at 1:30pm',
       reminder:true,
     },
     {
       id:3,
       text:'Food Shooping',
       day: 'Feb 5th at 2:30pm',
       reminder:false
     },
  ])

//Add Task

//random ID
  const addtask= (task) =>{
    const id =Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
//Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks
    (tasks.map((task) => task.id === id ?{...task, reminder: !task.reminder} : task))
  }

  return(
    <div className='container'>

      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={ AddTask }/>}

      {tasks.length > 0 ? (
        <Tasks tasks = {tasks} 
        onDelete= {deleteTask} 
        onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
        )}
    </div>
  )
}

// class App extends React.Component{
//   render(){
//     return <h1>Hello From a Class</h1>
//   }
// }
 
export default App