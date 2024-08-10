import { useDispatch, useSelector } from "react-redux"

export default function ReduxCounter() {
  const dispatch = useDispatch()
  const count = useSelector(state=> state)

  return (
    <>
      <button onClick={()=> dispatch({type: 'INCREMENT'})}>Increment</button>
      <h3>{count}</h3>
      <button onClick={()=> dispatch({type: 'DECREMENT'})}>Decrement</button>
    </>
  )
}