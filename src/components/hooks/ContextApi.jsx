import { createContext } from "react"
const data = createContext()
const data1 = createContext()

function ContextApi() {
    
  let myName = "Muhammad Fuaad Usman"
  let myGender = "male"
    return (
      <data1.Provider value={myGender}>
        <data.Provider value={myName}>
          <ChildA />
        </data.Provider>
      </data1.Provider>
    )
}

function ChildA() {
  return (
    <>
      <ChildB />
    </>
  )
}

function ChildB() {
  return (
    <>
      <ChildC />
    </>
  )
}

function ChildC() {
 
  return (
    <data1.Consumer>{(myGender) => {
      return (
        <data.Consumer>
        {
          (myName) => {
            return (
              <h1>My name is {myName} and my gender is {myGender}.</h1>
            )
          }
        }
        </data.Consumer> 
      )}}
    </data1.Consumer> 
  )
}
  
export default ContextApi  