import { useMemo, useState } from "react"

function UseMemo() {
    const [add, setAdd] = useState(0)
    const [minus, setMinus] = useState(100)
    const multiplication = useMemo(function multiply() {
      console.log("yes");
      return add * 10
    }, [add])
    return (
      <div>
        <div>{add}</div>
        {multiplication}
        <button onClick={()=>{setAdd(add + 1)}}>Add</button>
        <div>{minus}</div>
        <button onClick={()=>{setMinus(minus - 1)}}>minus</button>
      </div>
    )
  }
  
  export default UseMemo
  