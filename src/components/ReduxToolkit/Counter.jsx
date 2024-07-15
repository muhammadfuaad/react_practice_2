// src/features/counter/Counter.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './CounterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0)

  console.log("value:", value);
  console.log("typeof value:", typeof value);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      <input type="number" onChange={(e)=>{setValue(e.target.value)}}></input>
      <button onClick={() => dispatch(incrementByAmount(Number(value)))}>Increment</button>
    </div>
  );
};

export default Counter;

// notes:
// The typeof value changes to string when you add a number in the input because the value from an HTML input element 
// is always a string, regardless of the input type. This behavior is due to the way the HTML specification defines the 
// value property for input elements.

// When you type into the input box, the onChange event handler updates the value state with e.target.value. 
// Since e.target.value is always a string, value becomes a string.

// To ensure that value is always treated as a number, you can convert it to a number before updating the state. 