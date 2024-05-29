import React, { useState } from 'react';

export function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  console.log("page reloaded");

  return (
    <div>
      <h3>React Counter</h3>
      <div>
        <div>Counter Value: {counterValue}</div>
        <button
          onClick={()=>{
            setCounterValue(counterValue + 1)
          }}
        >
          Increment by 1
        </button>
        <button
          onClick={()=>{
            setCounterValue(counterValue - 1)
          }}
        >
          Decrement by 1
        </button>
        <button
          aria-label="Increment value"
          onClick={()=> {
            setCounterValue((counterValue)=>counterValue+1)
            setCounterValue((counterValue)=>counterValue+1)
            setCounterValue((counterValue)=>counterValue+1)
          }}
        >
          Increment by 3
        </button>
      </div>
    </div>
  );
}
