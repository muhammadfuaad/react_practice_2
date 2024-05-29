import './App.css'
import Calculator from './components/Calculator/Calculator'
import { Counter } from './components/Counter/Counter'
import IndexPageStatic from './components/PhoneBook(Static)/IndexPageStatic'
import IndexPage from './components/PhoneBook(Static)/IndexPageStatic'
import TicTacToe from './components/TicTacToe/TicTacToe'

function App() {

  return (
    <>
      {/* <IndexPageStatic /> */}
      <IndexPageStatic />
      {/* <Calculator /> */}
      {/* <TicTacToe /> */}
      <Counter />
    </>
  )
}

export default App
