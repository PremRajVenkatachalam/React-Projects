import React, { useState, useEffect } from 'react';
import './App.css';
import completedIcon from './assets/tick.png';

function App() {
    const [todo, setTodo] = useState(() => {
    const storedTodo = localStorage.getItem('todo');
    return storedTodo ? JSON.parse(storedTodo) : [];
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duedate, setDuedate] = useState("");
  
  const [checkedStatus, setCheckedStatus] = useState(() => {
    const storedCheckedStatus = localStorage.getItem('checkedStatus');
    return storedCheckedStatus ? JSON.parse(storedCheckedStatus) : [];
  });

  
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  useEffect(() => {
    localStorage.setItem('checkedStatus', JSON.stringify(checkedStatus));
  }, [checkedStatus]);

  
  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleDuedate(e) {
    setDuedate(e.target.value);
  }

  function addData() {
    if (title && description && duedate) {
      setTodo([...todo, { title, description, duedate }]);
      setCheckedStatus([...checkedStatus, false]); // Initialize checked status for new todo item
      setTitle("");
      setDescription("");
      setDuedate("");
    } else {
      alert("Please fill all the fields");
    }
    
  }

  function handleChecked(index) {
    const updatedCheckedStatus = [...checkedStatus];
    updatedCheckedStatus[index] = !updatedCheckedStatus[index];
    setCheckedStatus(updatedCheckedStatus);
  }


  return (
    <div className='App'>
      <div className='inputButton'>
        <h1>TO-DO LIST</h1>
        <input value={title} onChange={handleTitle} placeholder='Enter Title'/>
        <input value={description} onChange={handleDescription} placeholder='Description'/>
        <input value={duedate} onChange={handleDuedate} placeholder='Due Date'/>
        <button onClick={addData}>Add Task</button>
      </div>
      <div className='container-box'>
        {todo && todo.map((value, index) => (
          <div key={index} className='container'>    
            <h2>{value.title}</h2>
            <p><b>Description</b>: {value.description} </p>
            <p><b>Due Date</b>: {value.duedate}</p>
            <div className='checkspan'>
              <input type='checkbox' checked={checkedStatus[index]} onChange={() => handleChecked(index)}/>
              <span>Completed {checkedStatus[index] && <img src={completedIcon} alt="completedIcon" />} </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;