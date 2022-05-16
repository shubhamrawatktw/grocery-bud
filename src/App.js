import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: "false", type: "", msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
   if (!name) {
    return showAlert(true,"danger","Please enter value...")
   }
    let newList = [...list,{id:new Date().getTime().toString(),title:name}]
    setList(newList)
    showAlert(true,"success","item added to list")
    setName("")
  };

const showAlert = (show=false,type="",msg="")=>{
  setAlert({show,type,msg})
}

const handleEdit =(id)=>{
  
}

  const handleDelete = (id)=>{
    const newList = list.filter((item)=>item.id !== id)
    setList(newList)
    showAlert(true,"danger","item removed")
  }

  const handleClearAll = ()=>{
    setList([])
    showAlert(true,"danger" , "empty list")
  }
  return (
    <section className="section-center">
      {alert.show && <Alert alert={alert} showAlert={showAlert} list={list}/>}
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List 
          list = {list}
         onDelete = {handleDelete}
         onEdit = {handleEdit}
          />
          <button className="clear-btn" onClick={handleClearAll}>Clear all</button>
        </div>
      )}
    </section>
  );
}

export default App;
