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
import Axios from './components/Axios';
import Register from './components/RegistrationForm/Register';
import { UseMemo1, UseMemo2, UseMemo3, UseMemo4, UseMemo5, UseMemo6 } from './components/hooks/UseMemo';
import UseCallback from './components/hooks/UseCallback';
import UseEffect from './components/hooks/UseEffect';
import AssignmentTask from '../AssignmentTask';
import RegistrationForm from './components/CRUD/RegistrationForm';
import Index from './components/CRUD/Index';
import Login from './components/RegistrationForm/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phonebook" element={<IndexPageStatic />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/tic_tac_toe" element={<TicTacToe />} />
        <Route path="/form" element={<Form />} />
        <Route path="/use_context" element={<UseContext />} />
        <Route path="/context_api" element={<ContextApi />} />
        <Route path="/tic_tac_toe_2" element={<TicTacToe2 />} />
        <Route path="/axios" element={<Axios />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/use_memo_1" element={<UseMemo1 />} />
        <Route path="/use_memo_2" element={<UseMemo2 />} />
        <Route path="/use_memo_3" element={<UseMemo3 />} />
        <Route path="/use_memo_4" element={<UseMemo4 />} />
        <Route path="/use_memo_5" element={<UseMemo5 />} />
        <Route path="/use_memo_6" element={<UseMemo6 />} />
        <Route path="/use_callback" element={<UseCallback />} />
        <Route path="/use_effect" element={<UseEffect />} />
        <Route path="/assignment" element={<AssignmentTask />} />
        <Route path="/registration_form" element={<RegistrationForm />} />
        <Route path="/users" element={<Index />} />











      </Routes>
    </Router>
  );
}

export default App;
