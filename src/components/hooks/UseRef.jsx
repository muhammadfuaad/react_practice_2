import { useRef, useState } from "react"

function UseRef() {
    const refEelemnt = useRef("")
    const [name, setName] = useState("")
    console.log("refEelemnt:", refEelemnt);
    function reset() {
        setName("")
        refEelemnt.current.focus()
    }

    return (
      <div>
        <input type="text" value={name} ref={refEelemnt} onChange={(e)=>{setName(e.target.value)}}></input>
        <button onClick={reset}>Reset</button>
      </div>
    )
  }
  
  export default UseRef
  