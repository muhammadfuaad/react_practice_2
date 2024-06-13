import axios from "axios"
import { useEffect, useState } from "react"

export default function Index(params) {
  const [users, setUsers] = useState([])
  useEffect(()=>{
  axios.get("http://localhost:3001/users").then((data)=>setUsers(data.data))
  }, [])
  console.log("users:", users);
  const handleDelete = (id) => {
    console.log("id:", id);
    // const newUsers = users.filter((user)=> user._id !== id)
    // console.log("newUsers:", newUsers);
    // setUsers(newUsers)
    axios.delete(`http://localhost:3001/delete/${id}`).then((res)=> setUsers(users.filter((user)=> user._id !== id)))

  }
  return(
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>Action</th>
      </tr>
      {users.map((user)=>{
        return(
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            
            <td><button>Edit</button><button onClick={()=>{handleDelete(user._id)}}>Delete</button></td>
          </tr>
        )
      })}
    </table>
  )
}