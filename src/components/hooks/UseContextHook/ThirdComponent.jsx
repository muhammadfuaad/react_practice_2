import { useContext } from "react";
import {data, data1} from "./FirstComponent"

function ThirdComponent() {
  const name = useContext(data)
  const email = useContext(data1)
  console.log(name);

  return ( 
    <div>
      <h1>This is 3rd Componet</h1>
      <h1>My name is {name} and my email is {email}</h1>
    </div>
   );
}

export default ThirdComponent;