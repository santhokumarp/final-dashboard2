import React from 'react'
import './task.scss'
import { useState} from 'react'
import DragIndicatorRoundedIcon from '@mui/icons-material/DragIndicatorRounded';

const Task = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Horizon UI PRO', completed: false },
    { id: 2, name: 'Horizon UI Free', completed: false },
    { id: 3, name: 'Weekly Update', completed: false },
    { id: 4, name: 'Venus 3D Asset', completed: false },
    
  ]);

  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (event, index) => {
    setDraggedItem(index);
    setTimeout(() => (event.target.style.visibility = 'hidden'), 0);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, index) => {
    event.preventDefault();
    const newTasks = [...tasks];
    const [removed] = newTasks.splice(draggedItem, 1);
    newTasks.splice(index, 0, removed);
    setDraggedItem(null);
    setTasks(newTasks);
  };

  const toggleAll = (e) => {
    const checked = e.target.checked;
    setTasks((prevTasks) =>
      prevTasks.map((task) => ({ ...task, completed: checked }))
    );
  };

  const toggleDropdown = () => {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display =
      dropdownMenu.style.display === 'block' ? 'none' : 'block';
  };

  const handleCheckboxChange = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  
  return (
    <div className="task">
       <div className="todo-container">
      <div className="header">
        <div className="header-title">
          <input type="checkbox" id="selectAll" onChange={toggleAll} />
          <h1>Tasks</h1>
        </div>
        <div className="action-icon" onClick={toggleDropdown}>
          <div className="dropdown-menu" id="dropdown-menu">
            <a href="#">Edit</a>
            <a href="#">Delete</a>
          </div>
        </div>
      </div>
      {tasks.map((task, index) => (
        <div
          className="todo-item"
          key={task.id}
          draggable
          onDragStart={(event) => handleDragStart(event, index)}
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, index)}
        >
          <div className="task-name">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheckboxChange(index)}
            />
            <label>{task.name}</label>
          </div>
          <div className="move-icon"><DragIndicatorRoundedIcon/></div>
        </div>
      ))}
    </div>





    </div>
   
    
  )
}

export default Task