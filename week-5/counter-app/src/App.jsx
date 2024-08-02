import "./App.css";
import { useState } from "react";

function App() {
  const [todos,setTodos]=useState([{
    title:"sai",
    description:"Going to gym"
  },
  {
    title:"eshwar",
    description:"harkirat"
  }
])

function addtodo()
{
  setTodos([...todos,{
    title:"newtood",
    description:"adding"
  }]);
}
  return (
   
    <div>
       {/* <button onClick={addtodo}>Add new Todo</button>`
         
      {
        todos.map(function(todo)
      {
        return <Custombutton title={todo.title} description={todo.description}></Custombutton>
      })
      } */}
      <Custombutton >{JSON.stringify(todos)}</Custombutton>
    </div>
  );

}

function Custombutton(props) {
 return <div>
  <h1>{props.title}</h1>
  <h2>{props.description}</h2>
 </div>
}


export default App;
