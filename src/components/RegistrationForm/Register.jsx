import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  console.log("name:", name);
  console.log("email:", email);
  console.log("password:", password);
  const userData = {name, email, password}
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://127.0.0.1:3000/register", userData).then((result)=>{
      console.log("result:", result)
      navigate("/login")
    })
    .catch((error)=>{console.log("error:", error)})
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>
            <strong>Name</strong>
          </label>
          <input type="text" placeholder='Name' name='name' onChange={(e)=>{setName(e.target.value)}}></input>
        </div><div>
          <label htmlFor='email'>
            <strong>Email</strong>
          </label>
          <input type="text" placeholder='Email' name='email' onChange={(e)=>{setEmail(e.target.value)}}></input>
        </div>
        <div>
          <label htmlFor='email'>
            <strong>Password</strong>
          </label>
          <input type="password" placeholder='password' name='password' onChange={(e)=>{setPassword(e.target.value)}}></input>
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  )
}

export default Register