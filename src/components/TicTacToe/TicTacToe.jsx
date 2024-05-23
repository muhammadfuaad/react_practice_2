import React, { useState } from 'react';
import Intro from './intro';

const TicTacToe = () => {
  const [status, setStatus] = useState('X');
  const [squares, setSquares] = useState(Array(9).fill(null));
    
  const handleClick = (i) => {
    const newSquares = squares.slice();
    newSquares[i] = 'X'; 
    i++
    setSquares(newSquares);
    if (i % 2 === 0) {
      setStatus('P1');
    } else {
      setStatus('P2');
    }
  };

  const Square = ({ value, onClick }) => {
    return (
      <button className="square" onClick={onClick}>
        {value}
      </button>
    );
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const Board = () => {
    return (
      <div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
  };

  return (
    <div id="main">
      <Intro />
      <div className="game">
        <div className="game-info">
          <div>Next player {status}</div>
        </div>
        <div className="game-board">
          <Board />
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
