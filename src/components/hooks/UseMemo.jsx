import { useMemo, useState, useEffect } from "react"

// code_1
// It shows the value, but it calls the function whenever the state(add or minus) changes.

function UseMemo1() {
  const [add, setAdd] = useState(0)
  const [minus, setMinus] = useState(100)
  function multiply() {
    console.log("yes");
    return add * 10
  } 
  return (
    <div>
      <div>{add}</div>
      {multiply()}
      <button onClick={()=>{setAdd(add + 1)}}>Add</button>
      <div>{minus}</div>
      <button onClick={()=>{setMinus(minus - 1)}}>minus</button>
    </div>
  )
}

// code_2
// It neither shows the value nor calls the function
function UseMemo2() {
  const [add, setAdd] = useState(0)
  const [minus, setMinus] = useState(100)
  const multiplication = function multiply() {
    console.log("yes");
    return add * 10
  } 
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

// code_3
// It shows the value, but it calls the function whenever the state(add or minus) changes.
function UseMemo3() {
  const [add, setAdd] = useState(0)
  const [minus, setMinus] = useState(100)
  const multiplication = function multiply() {
    console.log("yes");
    return add * 10
  } 
  return (
    <div>
      <div>{add}</div>
      {multiplication()}
      <button onClick={()=>{setAdd(add + 1)}}>Add</button>
      <div>{minus}</div>
      <button onClick={()=>{setMinus(minus - 1)}}>minus</button>
    </div>
  )
}

// code_4
// It would give error.
function UseMemo4() {
  const [add, setAdd] = useState(0)
  const [minus, setMinus] = useState(100)
  useMemo(function multiply() {
    console.log("yes");
    return add * 10
  }, [add])
  return (
    <div>
      <div>{add}</div>
      {multiply()}
      <button onClick={()=>{setAdd(add + 1)}}>Add</button>
      <div>{minus}</div>
      <button onClick={()=>{setMinus(minus - 1)}}>minus</button>
    </div>
  )
}
 
// code_5
// It would give the error
function UseMemo5() {
  const [add, setAdd] = useState(0)
  const [minus, setMinus] = useState(100)
  const multiplication =  useEffect(function multiply() {
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

// code_6
// It would show the value and also prevent the function from calling unnecessarily..
function UseMemo6() {
  const [add, setAdd] = useState(0)
  const [minus, setMinus] = useState(100)
  const multiplication =  useMemo(function multiply() {
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

export {UseMemo1, UseMemo2, UseMemo3, UseMemo4, UseMemo5, UseMemo6}
  