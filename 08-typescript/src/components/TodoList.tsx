import React from 'react'
import Todo from "./Todo"
import { TodoType } from "../types/Types"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"


//her bir todo gösterilecek
const TodoList = () => {
    const {todos} = useSelector((state: RootState) => state.todo)

  return (
    <div>
        {todos.map((todo: TodoType) => (
        <Todo key={todo.id} todoProps={todo} />
      ))}
    </div>
  )
}

export default TodoList