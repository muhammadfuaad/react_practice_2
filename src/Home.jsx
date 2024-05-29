import { Link } from "react-router-dom";

function Home() {
  return(
    <>
      <h1 className="">Welcome To My Portfolio Website</h1>

      <div><Link to="/calculator">Calculator</Link></div>
      <div className=""><Link to="/phonebook">Phonebook App</Link></div>
      <div className=""><Link to="/calculator">Calculator</Link></div>
      <div><Link to="/counter">Counter</Link></div>

    </>
  )
}

export default Home