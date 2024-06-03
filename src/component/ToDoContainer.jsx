import React from 'react'
import Todo from './Todo'

function ToDoContainer({todos, deleteTodo}) {
  return (
    <div className='todo-container'>
        {todos.map((todo, index)=>{
            return(
                <Todo todo={todo} index={index} deleteTodo={deleteTodo}/>
            )
        })}
    </div>
  )
}

export default ToDoContainer