"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavBar() {
   const params = useSearchParams()
   const todosFilter = params.get('todos')
   console.log(todosFilter)
  return (
    <nav>
        <Link href="/" className={todosFilter==null ?"active":""}>All</Link>
        <Link href="/?todos=active" className={todosFilter=="active" ?'active':''}>ACTIVE</Link>
        <Link href="/?todos=completed" className={todosFilter=="completed" ?'active':''}>COMPLETED</Link>
    </nav>
  )
}
