import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import { Counter } from './components/Counter/Counter';
import IndexPageStatic from './components/PhoneBook(Static)/IndexPageStatic';
import TicTacToe from './components/TicTacToe/TicTacToe';
import Home from './Home';
import Form from './components/Form';
import UseContext from './components/hooks/UseContext';
import ContextApi from './components/hooks/ContextApi';
import TicTacToe2 from './components/hooks/TicTacToe2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phonebook" element={<IndexPageStatic />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/form" element={<Form />} />
        <Route path="/use_context" element={<UseContext />} />
        <Route path="/context_api" element={<ContextApi />} />
        <Route path="/tic_tac_toe_2" element={<TicTacToe2 />} />

      </Routes>
    </Router>
  );
}

export default App;
