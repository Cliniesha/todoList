import { useState } from 'react';
import './App.css';
import Task from './Task';
import React from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewtask] = useState("")

  const handleChange = (event) => {
    setNewtask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    }
    setTodoList([...todoList, task])
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  const completeTask = (id)=> (
    setTodoList(todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true }
        } else {
          return task;
        }
      }
      )
    )
  )

  return (
    <div className='App'>
      <div className='addtask'>
        <p id='ptodo'>TODO LIST</p>
        <input placeholder='Write your todo list...' onChange={handleChange} />
        <button id='badd' onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
      <p id='listp'>List of works</p>
        {todoList.map((task) => {
          return (
            <Task taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          )
        }
        )}

      </div>



    </div>
  )
}

export default App;


