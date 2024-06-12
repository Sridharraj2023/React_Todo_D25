import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'





function Input() {
  return (

<div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Task Name" 
          value=""/>          
        
        <input 
          type="text" 
          className="form-control" 
          placeholder="Task Description" 
          value="" 
           
        />
        <button className="add-btn" >Add</button>
      </div>
      <div className="filter-group">
        <select value="" onChange="">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not completed">Not Completed</option>
        </select>
      </div>
      <div className="task-list">
       
          <div key="" className="task-card">
            
              <div>
                
               <p></p>
              
               <p></p>
               
                
                <button className="save-btn" >Save</button>
              </div>
         
              <div>
                <h2></h2>
                <p></p>
                <div className="task-actions">
                  <button className="edit-btn" >Edit</button>
                  <button className="delete-btn" >Delete</button>
                  <div className="status-dropdown">
                    <button 
                      className="status-btn" 
                     
                    >
                      
                    </button>
                  </div>
                </div>
              </div>
           
          </div>
       
      </div>
    </div>
  );
}

export default Input;
