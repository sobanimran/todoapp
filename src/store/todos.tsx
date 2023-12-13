"use client"
import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";


export type Todo = {
    id: string;
    task: string;
    complete: boolean;
    createdAt: Date;
}


export type TodoContext = {
    todos: Todo[];
    handleAddTodo: (task: string) => void;
    toggleTodoAsCompleted:(id:string)=>void
    handleTodoDelete:(id:string)=>void
}


export const TodosContext = createContext<TodoContext | null>(null)




export const TodosProvider = ({ children }: { children: ReactNode }) => {
let newTodos =()=>{ 
 let  e = localStorage.getItem("todos")||"[]"
        return JSON.parse(e) as Todo[]
}

    const [todos, setTodos] = useState<Todo[]>(newTodos)


    const handleAddTodo = (task: string) => {
        setTodos((prev) => {
            const newTodos: Todo[] = [{
                id: Math.random().toString(),
                task,
                complete: false,
                createdAt: new Date()
            },
            ...prev]
            localStorage.setItem("todos",JSON.stringify(newTodos))
            return newTodos;
        })

    }
// task completed toggle
    const toggleTodoAsCompleted =(id:string) =>{
        setTodos((prev)=>{


            const newTodos =prev.map((task)=>{
               if(task.id ==id){
                return{...task,complete:!task.complete}
               }
               return task
            })

            localStorage.setItem("todos",JSON.stringify(newTodos))
            return newTodos
        })
    }

    // task delete 
    const handleTodoDelete = (id :string) => {
        setTodos((prev)=>{
            const newTodos =prev.filter((task)=>task.id !=id)
            localStorage.setItem("todos",JSON.stringify(newTodos))
            return newTodos
        })
    }
    return (
        <TodosContext.Provider value={{ todos, handleAddTodo ,toggleTodoAsCompleted ,handleTodoDelete}}>
            {children}
        </TodosContext.Provider>
    )
}




// context api 
export function useTodos() {
    const todosContextValue = useContext(TodosContext)
    if (!todosContextValue) {
        throw new Error('usetodos used outside of provider')
    }
    return todosContextValue;
}