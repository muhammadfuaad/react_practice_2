import { useEffect, useState } from 'react'
import './App.css'

function Calculator() {
  const [inputValue, setInputValue] = useState("")
  const [firstValue, setFirstValue] = useState("")
  const [secondValue, setSecondValue] = useState("")
  const [operation, setOperation] = useState("")

  console.log("firstValue:", parseInt(firstValue));
  console.log("typeof firstValue:", typeof firstValue);

  console.log("secondValue:", parseInt(secondValue));
  console.log("typeof secondValue:", typeof secondValue);

  console.log("inputValue:", inputValue);

  const handleClear = () => {
    setInputValue("")
    setFirstValue("")
    setSecondValue("")
  }


  const setAmount = (e) => {
    if(operation == "") {
      const newFirstValue = parseInt(firstValue + e.target.value) 
      setFirstValue(newFirstValue)
      setInputValue(newFirstValue)
    } else {
      const newSecondValue = parseInt(secondValue + e.target.value) 
      setSecondValue(newSecondValue)
      setInputValue(newSecondValue)
    }
  }

  const showResult =() => {
    if (operation == "increment") {
      const answer = firstValue + secondValue
      setInputValue(answer)
    } else if (operation == "decrement") {
      const answer = firstValue - secondValue
      setInputValue(answer)
    } else if (operation == "multiplication") {
      const answer = firstValue * secondValue
      setInputValue(answer)
    } else if (operation == "division") {
      const answer = firstValue / secondValue
      setInputValue(answer)
    }
  }

  return (
    <>
      <div className='container'>
        <div className='calculator'>
          <form action=''>
            <div className='display'>
              {/* <input type="text" value={operation == "increment" ? "+" : operation == "decrement" ? "-" : 
                operation == "multiplication" ? "*" : operation == "division" ? "/" : ""}
              ></input> */}
              <input type="text" value={inputValue}></input>

            </div>

            <div>
              <input type='button' value='AC' onClick={handleClear}></input>
              <input type='button' value='DE'></input>
              <input type='button' value='.'></input>
              <input type='button' value='/' onClick={(e)=>setOperation("division")}></input>
            </div>

            <div>
              <input type='button' value='7' onClick={setAmount}></input>
              <input type='button' value='8' onClick={setAmount}></input>
              <input type='button' value='9' onClick={setAmount}></input>
              <input type='button' value='*' onClick={(e)=>setOperation("multiplication")}></input>
            </div>

            <div>
              <input type='button' value='4' onClick={setAmount}></input>
              <input type='button' value='5' onClick={setAmount}></input>
              <input type='button' value='6' onClick={setAmount}></input>
              <input type='button' value='+' onClick={(e)=>setOperation("increment")}></input>
            </div>

            <div>
              <input type='button' value='1' onClick={setAmount}></input>
              <input type='button' value='2' onClick={setAmount}></input>
              <input type='button' value='3' onClick={setAmount}></input>
              <input type='button' value='-' onClick={(e)=>setOperation("decrement")}></input>
            </div>

            <div>
              <input type='button' value='00' onClick={setAmount}></input>
              <input type='button' value='0' onClick={setAmount}></input>
              <input type='button' value='=' className='equal' onClick={showResult}></input>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Calculator
