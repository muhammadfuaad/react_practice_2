import { useEffect, useState } from "react"

export default function UseEffect(params) {
  const [display, setDisplay] = useState(false)
  const [add, setAdd] = useState(0)
  const [subtract, setSubtract] = useState(0)

  useEffect(()=>{
    console.log(`this console will print whenever count value updates`);
  }, [add])

  useEffect(()=>{
    console.log(`this console will print only on page first load`);
  }, [])

  useEffect(()=>{
    console.log(`this console will print on each re-render`);
  })

  return(
    <div>
      {display && 
        <ChildComponent />
      }
      <button onClick={()=>{setDisplay(!display)}}>Toggle Component</button>
      <div className="flex flex-col">
        Add: {add}
        <button onClick={()=>{setAdd(add+1)}}>Add</button>
      </div>
      <div className="flex flex-col">
        Subtract: {subtract}
        <button onClick={()=>{setSubtract(subtract-1)}}>Subtract</button>
      </div>

    </div>
  )
}

function ChildComponent(params) {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    
    const interval = setInterval(()=>{
        setCount((prevCount) => prevCount + 1)

        console.log(`Child component mounted ${count}`);
  
      }, 3000)
    
    return ()=>{
      clearInterval(interval)
      console.log(`Child component unmounted`);
    }
  }, [])
  return(
    <>
    <h1>This is Child Component</h1></>
  )
}

// question:
// Why is the count value not increasing?
// why does cleanup function runs on page load in React.StrictMode?