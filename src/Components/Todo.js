import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({task,key,changeComplete,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={()=>changeComplete(task.id)} className={`${task.completed ? 'completed' : 'todoField'}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} className='editButton' onClick={()=> editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} className='deleteButton' onClick={()=>{deleteTodo(task.id)}}/>
      </div>
    </div>
  )
}

export default Todo

// onClick={changeComplete(task.id)} className={`${task.completed?'completed': ''}`}
