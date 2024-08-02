import { useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <>
    <RecoilRoot><Count />
    <ShowOddEven/></RecoilRoot>
    
      
    </>
  );
}

function Count() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <CountRenderer />
      <Buttons />1
    </div>
  );
}


function ShowOddEven()
{
  const isEven = useRecoilValue(evenSelector);
  
  return <p>{isEven ?"It is even":"It is odd"}</p>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
