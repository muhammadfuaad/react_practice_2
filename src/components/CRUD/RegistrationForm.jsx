import { useState } from "react"
import axios from "axios"

export default function RegistrationForm(params) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = () => {
    
    axios.post("http://localhost:3001/create", userData).then((res)=>{console.log(res);}).catch((err)=>{console.log(err);})
  }
  const userData = {name, email, password}
  console.log("name:", name);
  console.log("email:", email);
  console.log("password:", password);
  console.log("userData:", userData);

  return(
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-2xl">Registration Form</h2>
      <div>
        <label className="font-semibold">Name:</label>
        <input className="border border-black" onChange={(e)=>setName(e.target.value)}></input>
      </div>
      <div>
        <label className="font-semibold">Email:</label>
        <input className="border border-black" onChange={(e)=>setEmail(e.target.value)}></input>
      </div>
      <div>
        <label className="font-semibold">Password:</label>
        <input className="border border-black" onChange={(e)=>setPassword(e.target.value)}></input>
      </div>
      <button>Upload Picture</button>
      <button onClick={()=>handleSubmit()}>Register</button>
    </div>
  )
}