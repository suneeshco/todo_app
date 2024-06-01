import React,{useState} from 'react'

const TodoForm = ({addToDo ,unique}) => {
    const [value,setValue] = useState('')
    const [error, setError] = useState('')

    const handleSubmit=e=>{
        e.preventDefault()
        const found=unique(value)
        if(value.trim() !== '' && !found) {
          addToDo(value);
          setValue('');
          setError('');
        } else {
          if(found){
            setError('Value Should Be Unique');
          }else{
            setError('Please enter a task!');
          }
          
        }
    }
  return (
    <div>
      <form className='TodoForm' onSubmit={handleSubmit} >
        <input type="text" className='todo-input' placeholder='What is the task?' value={value} onChange={(e)=> setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Add Task</button>
        <p style={{ color: 'red' }}>{error}</p>
      </form>
    </div>
  )
}

export default TodoForm
