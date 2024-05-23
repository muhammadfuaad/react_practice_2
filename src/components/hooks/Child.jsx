import {memo } from "react"

function Child() {
    console.log("Child");

    return (
      <></>
    )
  }
  
  export default memo(Child)
  