import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = [value, ...todo];
    setTodo(newTodo);
    setValue("");
  };

  const handleOnchange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleDelete = (delTodo) => {
    let newTodo = todo.filter((list) => list !== delTodo);

    setTodo(newTodo);
  };

  const handleEdit = (editTodo)=>{
  const index = todo.indexOf(editTodo)
  
  }
  return (
    <>
      <h2 className="title">Grocery Bud</h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="eg. eggs"
            value={value}
            onChange={handleOnchange}
          />
          <button>Submit</button>
        </form>
        <List list={todo} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </>
  );
}

export default App;
