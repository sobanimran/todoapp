"use client"

import { useTodos } from "@/store/todos"
import { useSearchParams } from "next/navigation"

export default function Todos() {
  const {todos, toggleTodoAsCompleted ,  handleTodoDelete} = useTodos()

  const params = useSearchParams()
  const todosFilter = params.get('todos')

  
  let filterTodos =todos;
  // active todos
  if(todosFilter==="active"){
   filterTodos = filterTodos.filter((todo)=>todo.complete==false)   
  }
  // completed todos
  if(todosFilter==="completed"){
   filterTodos = filterTodos.filter((todo)=>todo.complete==true)   
  }
    return (
    <ul className="main-task">
        {filterTodos.map((todo)=>(
            <li key={todo.id}>
                <input type="checkbox"  id={`todo-${todo.id}`} checked={todo.complete} onChange={()=>{toggleTodoAsCompleted(todo.id)}} />
                <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                {todo.complete&&(
                    <button type="button" onClick={()=>handleTodoDelete(todo.id)}>Delete</button>
                )}
            </li>
        ))}
    </ul>
  )
}
