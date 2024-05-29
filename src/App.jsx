import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import { Counter } from './components/Counter/Counter';
import IndexPageStatic from './components/PhoneBook(Static)/IndexPageStatic';
import TicTacToe from './components/TicTacToe/TicTacToe';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phonebook" element={<IndexPageStatic />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
}

export default App;
