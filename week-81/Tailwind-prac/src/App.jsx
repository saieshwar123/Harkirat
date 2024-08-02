import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     {/* <div style={{display:"flex","justifyContent":"space-between  "}}>
      <div style={{backgroundColor:"red"}}>Div1</div>
      <div style={{backgroundColor:"blue"}}>Div2</div>
      <div style={{backgroundColor:"green "}}>Div3</div>
     </div> */}

     <div className='flex'>
      <div style={{backgroundColor:"red"}}>Div1</div>
      <div style={{backgroundColor:"blue"}}>Div2</div>
      <div style={{backgroundColor:"green "}}>Div3</div>
     </div>
    </div>
  )
}

export default App
  