import React, { useState } from "react";
import "../App.css";

const TodoCreate = ({onCreateTodo}) => {
  const [newTodo, setNewTodo] = useState("");

  const clearInput=()=>{
    setNewTodo('');
  }

  const createTodo = () => {
    if(!newTodo) return;
    const request ={
        id: Math.floor(Math.random()*99999),
        content:newTodo
    }

    onCreateTodo(request)
    clearInput(); //yeni veri eklendikten sonra temizle
  }

  const handleKeyDown = (e) => { //enter a basınca listeye ekleme
    if (e.key === "Enter") {
      createTodo();
    }
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        className="todo-input"
        type="text"
        placeholder="todo giriniz"
      />
      <button onClick={createTodo} className="todo-create-button">
        Todo oluştur
      </button>
    </div>
  );
};

export default TodoCreate;
