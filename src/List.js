import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ list ,onDelete,onEdit}) => {
  return (
    <div className="grocery-list">
   {list.map((item)=>{
     return (
       <article className="grocery-item" key={item.id}>
       <p className="title">{item.title}</p>
       <div className="btn-container">
         <button className="edit-btn" onClick={()=>onEdit(item.id)}><FaEdit/></button>
         <button className="delete-btn" onClick={()=>onDelete(item.id)}><FaTrash/></button>
       </div>
       </article>
     )
   })}
    </div>
  );
};

export default List;
