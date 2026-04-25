import TodoCreate from "./components/TodoCreate";
import "./App.css";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import { useState } from "react";

function App() {

  const [todos,setTodos]=useState([]);
  
  const createTodo = (newTodo) => {
    setTodos([...todos,newTodo]); //todo array ini aç dizinin içindeki elemanları açar new todo da yeni eleman olarak ekle
  }
 
 const removeTodo=(todoId)=>{
    setTodos(todos.filter((todo)=>todo.id!==todoId)); //silinecek id ile todo daki id leri karşılaştır

 }

 const updateTodo=(newTodo)=>{
  const updatedTodos=todos.map((todo)=>{
    if(todo.id!==newTodo.id){
      return todo;
    }
    return newTodo;
  })
  setTodos([...updatedTodos]);

 }


  return (
    <div className="App">
      <div className="main">
        <TodoCreate onCreateTodo={createTodo} /> 
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo}/>
      </div>
    </div>
  );
}

export default App;
