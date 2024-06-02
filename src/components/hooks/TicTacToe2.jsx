import { useState } from "react"

function TicTacToe2(params) {

  const [state, setState]  = useState(Array(9).fill(null))
  const [firstPlayersTurn, setFirstPlayersTurn] = useState(true)
  const handleClick = (index) => {
    // console.log(index);
    const newState = [...state];
    newState[index] = firstPlayersTurn ? 'X': '0' // or 'O', based on the game logic
    setState(newState);
    setFirstPlayersTurn(!firstPlayersTurn)
  }

  const checkWinner = () => {
    const winnerLogic = [[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8], [0,4,8], [2,4,6], [0,1,2]]
  
    for(let logic of winnerLogic) {
        const [a,b,c]=logic
        if(state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
          console.log("logic:", logic);
          return true
        }
        
    }
    return false
  }
  

  const isWinner  = checkWinner()
  return (
    
    <div>
      {isWinner ? <>Someone Won</> :
      <>
      <div className="flex">
        <Square onClick={()=>{handleClick(0)}} value={state[0]}/>
        <Square onClick={()=>{handleClick(1)}} value={state[1]}/>
        <Square onClick={()=>{handleClick(2)}} value={state[2]}/>
      </div>
      <div className="flex">
        <Square onClick={()=>{handleClick(3)}} value={state[3]}/>
        <Square onClick={()=>{handleClick(4)}} value={state[4]}/>
        <Square onClick={()=>{handleClick(5)}} value={state[5]}/>
      </div>
      <div className="flex">
        <Square onClick={()=>{handleClick(6)}} value={state[6]}/>
        <Square onClick={()=>{handleClick(7)}} value={state[7]}/>
        <Square onClick={()=>{handleClick(8)}} value={state[8]}/>
      </div>
      </>}
    </div>
  )
  
}

function Square({ onClick, value }) {
  console.log("value is", value);
  return (
    <div className="border-2 border-black w-20 h-20 flex justify-center items-center" onClick={onClick}>
      <h5>{value}</h5>
    </div>
  )
}

export default TicTacToe2