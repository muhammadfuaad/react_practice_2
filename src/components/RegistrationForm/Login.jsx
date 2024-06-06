import { useState } from 'react'
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // console.log("email:", email);
  // console.log("password:", password);

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://127.0.0.1:5000/login", {email, password}).then((result)=>{console.log("result:", result);}).catch((error)=>{console.log("error:", error)})
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
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
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
