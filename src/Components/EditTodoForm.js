import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const EditTodoForm = ({editTodos,task,uniqueEdit,closeButton}) => {
  const [value,setValue] = useState(task.task)
  const [error, setError] = useState('')

  const handleSubmit=e=>{
      e.preventDefault()
      const found=uniqueEdit(value,task.id)

      if (value.trim() !== '' && !found) {
        editTodos(value,task.id)
        setValue('')
        setError('')
      } else {
        if(found){
          setError('Value should be unique')
        }else{
          setError('Please enter a task!')
        }
        
      }
  }
return (
  <>
  <div className="Todo2">
      <form onSubmit={handleSubmit} className="EditTodoForm">
        <input
          type="text"
          placeholder="Edit here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="todo-input2"
        />
        <button type="submit" className="todo-btn2">
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button type="button" className="todo-btn2">
          <FontAwesomeIcon icon={faXmark } onClick={()=>{closeButton(task.id)}} />
        </button>
        
      </form>
      
    </div>
    {error && <p style={{ color: 'red' }}>{error}</p>}
  </>
  
)
}

export default EditTodoForm
