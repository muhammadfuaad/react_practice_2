import {memo } from "react"

function Child() {
    console.log("Child");

    return (
      <>This is child component</>
    )
  }
  
  export default memo(Child)
  