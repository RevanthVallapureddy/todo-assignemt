import {useState,useEffect} from 'react'
import {v4} from 'uuid'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import TodoItem from './components/TodoItem'
import CompletedItem from './components/CompletedItem'
import './App.css'

function App() {
  const [task,setTask] = useState('')
  const [todoList,setTodoList] = useState([])
  const [completedTaskList,setCompletedList] = useState([])

  const displayTodoList = JSON.parse(localStorage.getItem('list')) 
  const displayCompletedList = JSON.parse(localStorage.getItem('completeList'))


  const onTask = (event) => {
    setTask(event.target.value)
  }

  const addTask = () => {
    const newTask = {
      id:v4(),
      task,
      isCompleted:false
    }
    setTodoList([...todoList,newTask])
    setTask('')
    localStorage.setItem('list',JSON.stringify([...todoList,newTask]))
  }

  const deleteTask = (id) => {
    const updatedTodoList = displayTodoList.filter(todo => (id !== todo.id))
    setTodoList(updatedTodoList)
    localStorage.setItem('list',JSON.stringify(updatedTodoList))
   
  }

  const deleteCompletedTask = (id) => {
    const list = completedTaskList.filter(todo => (id !== todo.id))
    setCompletedList(list)
  }

  const onCompleteTask = (id) => {
   
    const updatedCompleteList = todoList.filter(todo => (id === todo.id))
    const completedTask = updatedCompleteList[0]
    const update = {
      isCompleted:true
    }
    const updateCompletedTask = {...completedTask,...update}
    setCompletedList([...completedTaskList,updateCompletedTask])
    localStorage.setItem('completeList',JSON.stringify([...completedTaskList,updateCompletedTask]))
   deleteTask(id)
  }

  
  


  return (
    <div className='bg'>
      <div className='creating-sec'>
      <Card>
      <Card.Body>
        <h1>Add Task</h1>
        <input type='text' placeholder='Enter Task' value={task} onChange={onTask}/>
        <Button variant="primary" className='btn' onClick={addTask}>Create</Button>
      </Card.Body>
    </Card>
      </div>
     <div className='display-cont'>
      <div className='task-display'>
        <h1>Todo List</h1>
        <ul>
          {displayTodoList.map(todo => (
            <li key={todo.id}>
              <TodoItem todo={todo} deleteTask={deleteTask} onCompleteTask={onCompleteTask} deleteCompletedTask={deleteCompletedTask}/>
            </li>
          ))}
        </ul>
      </div>
      <div className='complete-task-display'>
            <h1>Completed Todo</h1>
            <ul>
              {displayCompletedList.map(todo => (
                <li key={todo.id}>
                  <TodoItem todo={todo} deleteTask={deleteTask}  onCompleteTask={onCompleteTask} deleteCompletedTask={deleteCompletedTask}/>
                </li>
              ))}
            </ul>
      </div>
      </div>
    </div>
  );
}

export default App;
