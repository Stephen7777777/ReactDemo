import { useState } from 'react'
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) =>{
    e.preventDefault()
    if(!text) {
      alert('Please add a Task')
      return
    }
    onAdd({text, day ,reminder})
    setText('')
    setDay('')
    setReminder('')
  }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className= 'form-control'>
        <lable>Task</lable>
        <input 
        type='text' 
        placeholder='Add Task'
        
         value={text} 
         onchange={(e) => setText ( e.target.value)}/>
      </div>

      <div className= 'form-control'>
        <lable>Day & Time</lable>
        <input type='text' placeholder='Add Day & Time' 
         value={day} onchange={(e) => setDay(e.target.value)}/>
      </div>

      <div className= 'form-control form-control-check'>
        <lable>Set Reminder</lable>
        <input type='checkbox'/>
      </div>

      <input type='submit' 
      checker={reminder}
      value='Save Task' className='btn btn-block'  //提交栏
       value={reminder} onchange={(e) => setReminder(e.currentTarget.checked)}/>
    </form>
  )
}
export default AddTask