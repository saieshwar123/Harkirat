import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/Createtodo'
import { Todos } from './components/Todos'

function App() {

  const [todos,setTodos]=useState([])

  fetch("http://localhost:3000/todos").then(async function(res){
    const json=await res.json();
    setTodos(json.todos);
  })
  // console.log(todos);
  return (
    <div>
      <CreateTodo></CreateTodo>
  <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
