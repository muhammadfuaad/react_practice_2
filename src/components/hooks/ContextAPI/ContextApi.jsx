import { createContext, useRef, useState } from "react"
import ChildA from "./ChildA"
const data = createContext()
const data1 = createContext()

function ContextApi() {
    
  let myName = "Muhammad Fuaad"
  let myGender = "male"
    return (
      <data1.Provider value={myGender}>
        <data.Provider value={myName}>
          <ChildA />
        </data.Provider>
      </data1.Provider>
    )
  }
  
  
  export default ContextApi
  export {data, data1}
  