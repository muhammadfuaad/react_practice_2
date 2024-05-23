import { data, data1 } from "./ContextApi"
function ChildC(myName, myGender) {
    return (
      <data1.Consumer>
        <data.Consumer>
          {
            (myName, myGender) => {
              return (
                <h1>My name is {myName} and my gender is {myGender}.</h1>
              )
            }
          }
        </data.Consumer> 
      </data1.Consumer> 
        
    )
  }
  
  export default ChildC
  