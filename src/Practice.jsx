import React, { useState, useEffect } from "react";
import "./Practice.css";

export const TodoList = () => {
  const [todo, setToDo] = useState([]);
  const [get, setGet] = useState("");
  const [copy, setCopy] = useState([]);

  const handleAdd = () => {
    setToDo([get, ...todo]);
    setCopy([get, ...todo]);
    // console.log(todo)
  };
  const handleDelete = (item) => {
    const delete1 = todo.filter((elm) => elm !== item);
    setToDo(delete1);
  };

  return (
    <div className="main-container">
      <div>
        <h1>My To-Do List</h1>
      </div>
      <div>
        <input
          type="text"
          maxLength="30"
          onChange={(e) => setGet(e.target.value)}
        />
        <button onClick={handleAdd}>ADD</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      {todo.map((item) => {
        return(
          <>
          
          <h4 onClick={()=>handleDelete(item)}>{item}</h4>
          <button onClick={()=>handleDelete(item)}>Done</button>
          </>
        )
        })}
    </div>
  );
};
