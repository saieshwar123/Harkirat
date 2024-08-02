import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

import { todosState } from "./store/atoms/todos";
import { useState } from "react";
export default function App() {
  return <div>
    <RecoilRoot>
    Hello World
    <Todo/>
    <DisplayTodos/>
    </RecoilRoot>
    </div>;
}

function Todo() {
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')

  function addTodo()
  {
    const todoarray=useRecoilValue(todosState);
    const obj={
      title:title,
      description:description
    }
    useSetRecoilState([...todoarray,obj])
  }
  return (
    <div>
      Title <input type="text" onChange={(e)=>{
        setTitle(e.target.value)
      }}/>
      <br />
      Description <input type="text" onChange={(e)=>{
        setDescription(e.target.value)
      }}/>
      <br />
      <button onClick={addTodo}>Add</button><br>
      </br>
    </div>
  
  );
}


function DisplayTodos()
{

  const todos=useRecoilValue(todosState);
  return todos.map((todo)=>{
    return <div>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
    </div>
  })
}