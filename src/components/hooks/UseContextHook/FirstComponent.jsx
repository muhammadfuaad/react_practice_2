import { createContext } from "react";
import SecondComponent from "./SecondComponent";
const data = createContext()
const data1 = createContext()


function FirstComponent() {
  const name = "Muhammad Fuaad"
  const email = "fuaad29@gmail.com"
  return ( 
    <div>
      <h1>This is 1st Componet</h1>
      <data.Provider value={name}>
        <data1.Provider value={email}>
          <SecondComponent />
        </data1.Provider>
      </data.Provider>
    </div>
   );
}

export default FirstComponent;
export {data, data1}