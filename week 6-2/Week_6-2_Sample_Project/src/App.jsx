import { useEffect, useMemo, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";

function App() {
  
  const [incomeTax,setIncometax]=useState(20000);
  const divRef=useRef();

  useEffect(function(){
    setTimeout(function(){
      console.log(divRef.current);
      divRef.current.innerHTML=20;
    },5000)
  })
  // const [count,setCount]=useState(0);
  // const [input,setInput]=useState(0);


  

  // const handleInputChange = (event) => {
  //   setInput(event.target.value);
  
  // };
  // let count1=useMemo(function(){
  //   console.log("hi"); 
  //   let count1=0;
  //     for(let i=0;i<=input;i++)
  //     count1=count1+i;
   
  //   return count1;
  // },[input])
  
  // return (
  //   <>
  //   <input type="number" onChange={handleInputChange}></input>
  //   <h1>Sum is {count1}</h1>
  //   <button onClick={function (){
  //     setCount(count+1);
  //   }}>Counter :{count} </button>
    // </>

    return <div>
      Your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  
}
// function Todo({ id, todos }) {
//   return
//     <div>
//       {
//         todos.map(function (todo) {
//           console.log(todo.id)
//           if (todo.id === id) 
//             {
//             <div>
//               <div>{todo.id}</div>
//               <h1>{todo.title}</h1>
//               <h2>{todo.description}</h2>
//             </div>
//             }
//         })
//       }

//     </div>
// }

// function Todo({id, todos }) {
//   return (
//       <div>
//           {
//           todos.map((todo) => (
//             todo.id===id?(<div key={todo.id}> {/* Add key prop for better performance */}
//             <div>{todo.id}</div>
//             <h1>{todo.title}</h1>
//             <h2>{todo.description}</h2>
//         </div>):""
            
//           ))}
//       </div>
//   );
// }

// function Todo({id}){
//   const [todo, setTodo] = useState({});

//   useEffect(function () {
//     axios.get("https://sum-server.100xdevs.com/todo?id="+id).then(function (res) {
//       setTodo(res.data.todo);
//     });
//   }, [id]);

//   return <div>
//          id:{id}
//          <h1>{todo.title}</h1>
//     <h2>{todo.description}</h2>
//   </div> 
          
// }

export default App;


           
             