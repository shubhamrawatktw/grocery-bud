import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ list ,onDelete,onEdit}) => {
  return (
    <>
      <div className="section">
        <ul>
          {list.map((todo, index) => {
            return (
              <div className="section" key={index}>
                <li>{todo}</li>
                <FaEdit onClick={()=>onEdit(todo)}/>
                <FaTrash onClick= {()=> onDelete(todo)}/>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default List;
