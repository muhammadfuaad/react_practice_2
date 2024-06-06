import { useCallback, useState } from "react"
import Child from "./Child"

function UseCallback() {
  const [add, setAdd] = useState(0)
  const [minus, setMinus] = useState(100)
  const [count, setCount] = useState(0)
  const learning = useCallback(()=>{
    console.log("yes");
  }, [count])
  return (
    <div>
      <div>{add}</div>
      <Child learning={learning}/>
      <button onClick={()=>{setAdd(add + 1)}}>Add</button>
      <div>{minus}</div>
      <button onClick={()=>{setMinus(minus - 1)}}>minus</button>
      <div>{count}</div>
      <button onClick={()=>{setCount(count + 1)}}>count</button>
    </div>
  )
}
  
export default UseCallback
  