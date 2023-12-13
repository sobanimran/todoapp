import AddTodo from "@/comp/add-todo";
import NavBar from "@/comp/navbar";
import Todos from "@/comp/todos";
import { RiTodoLine } from "react-icons/ri";

const Page = () => {
  return (
    <main>

      <h2> <RiTodoLine className='icons' /> TODO NEXT + TYPESCRIPT<RiTodoLine className='icons' /> </h2>
      <NavBar />
      <AddTodo />
      <Todos />
    </main>
  )
}
export default Page;