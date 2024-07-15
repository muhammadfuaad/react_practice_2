import { createContext, useContext } from "react";
const data = createContext()
const data1 = createContext()


function FirstComponent() {
  const name = "Muhammad Fuaad"
  const email = "fuaad29@gmail.com"
  return ( 
    <div>
      {/* <h1>This is 1st Componet</h1> */}
      <data.Provider value={name}>
        <data1.Provider value={email}>
          <SecondComponent />
        </data1.Provider>
      </data.Provider>
    </div>
   );
}

function SecondComponent() {
  return ( 
    <div>
      {/* <h1>This is 2nd Componet</h1> */}
      <ThirdComponent />
    </div>
   );
}

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

export default FirstComponent;
// export {data, data1}