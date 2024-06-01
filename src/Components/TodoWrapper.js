import React,{useState} from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'
uuidv4()

const TodoWrapper = () => {
    const [todos,setTodos]=useState([])
    
    const addToDo=(todo)=>{
      setTodos([{ id: uuidv4(), task: todo, completed: false, isEditing: false }, ...todos]);
    }
        

    const changeComplete=(id)=>{
        setTodos(todos.map((todo)=> todo.id===id ? {...todo,completed:!todo.completed} : todo))
    }

    const deleteTodo=(id)=>{
      setTodos(todos.filter(todo=>todo.id !== id))
    }

    const editTodo=(id)=>{
      setTodos(todos.map((todo)=> todo.id===id ? {...todo,isEditing : !todo.isEditing } : todo))
    }

    const uniqueEdit=(task,id)=>todos.find((element)=>element.task===task && element.id!==id)
    const unique=(task)=>todos.find((element)=>element.task===task)
    const editTodos=(task,id)=>{
      
      setTodos(todos.map( todo => todo.id===id ? {...todo,task,isEditing:!todo.isEditing} : todo))
    }
    
    const closeButton=(id)=>{
      setTodos(todos.map((todo)=>todo.id===id ? {...todo,isEditing:false} : todo))
    }
    
    
  return (
    <div className='TodoWrapper'>
        <h1>Todo List</h1>  
      <TodoForm addToDo={addToDo} unique={unique} />
      {
        todos.map((todo,index)=>(
          todo.isEditing ? <EditTodoForm task={todo} editTodos={editTodos} uniqueEdit={uniqueEdit} closeButton={closeButton}/> :
            <Todo task={todo} key={index} changeComplete={changeComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
          ))
      }
    </div>
  )
}
   


export default TodoWrapper
