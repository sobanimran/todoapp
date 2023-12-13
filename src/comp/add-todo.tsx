"use client"
import { useTodos } from "@/store/todos";
import { FormEvent, use, useState } from "react"


export default function AddTodo() {
    const {handleAddTodo} = useTodos()
    const [todo, setTodo] = useState("")
    const handleFormSubmit = (e:FormEvent<HTMLElement>)=> {
        e.preventDefault();
        handleAddTodo(todo)
        setTodo("")
    }
  return (
    <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Write Your Todo" value={todo} onChange={(e)=>setTodo(e.target.value)}  />
        <button type="submit" >click</button>
    </form>
  )
}
