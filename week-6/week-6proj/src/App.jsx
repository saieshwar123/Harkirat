import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { set } from "mongoose";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(function () {
    setInterval(function() {
      fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      });
    }, 5000);
  }, []);

  return (
    <div>
      hi there
      {todos.map(function (todo) {
        return (
          <div>
            {" "}
            <div>{todo.id}</div>
            <div>{todo.title}</div>
            <div>{todo.description}</div>
            <div>{todo.completed}</div>
          </div>
        );
      })}
    </div>
  );
}

function Title() {
  return <div>Hi there</div>;
}

export default App;
