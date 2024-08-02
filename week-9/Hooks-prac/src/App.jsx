// import { useEffect, useState, React } from "react";
// import axios from "axios";
// import "./App.css";


// function App() {
//   const [count,setCount]=useState(0);
//   // const Intervaltime=usetIntervaltime();
//   setInterval(()=>{
//     setCount(count+1);
//   },1000)

//   return <div>Timer is {count}</div>
// }


// export default App;

import { useEffect, useState } from 'react';




function useDebounceValue(value,time)
{
  const [debounce,setdebounce]=useState(value);

  useEffect(()=>{
    let timeout=setTimeout(()=>{
      setdebounce(value);
    },time)

    return ()=>{
      clearTimeout(timeout)
    }
  },[value]);

  return debounce;
}

function App() {
  const [value,setValue]=useState(0);

  const debouncedValue=useDebounceValue(value,1000)
  return (
    <>
      Debounced value is {debouncedValue}
      <input tpe="text" onChange={(e)=>setValue(e.target.value)}/>
    </>
  )
}

export default App