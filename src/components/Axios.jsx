import { useState } from "react"
import axios from "axios";

function Axios() {
  const [url, setUrl] = useState("")
  const [products, setProducts] = useState(null)
  const handleSearch = () => {
    const completeUrl = `https://fakestoreapi.com/${url}`
    // first method
    axios.get(completeUrl).then((res)=>{
      console.log("res.data:", res.data);
      setProducts(res.data)
    })

    // second method
    // fetch(completeUrl).then((res)=>{
    //   console.log("res:", res);
    //   return res.json()
    // }).then((res2)=>{
    //   console.log("res2:", res2);
    //   setProducts(res2)
    // })

    console.log(`handleSearch cicked`);
    console.log("url:", url);
    console.log("completeUrl:", completeUrl);
  }
  return (
    <div>
      <input className="border border-black h-full" onChange={(e)=>{setUrl(e.target.value)}}></input>
      <button onClick={handleSearch}>Search</button>
      {products && (products.length > 1 ? products.map((product)=>{
        const {id, title} = product
        return (
          <>
            <h3><span className="font-semibold">id:</span> {id}</h3>
            <h3><span className="font-semibold">title</span>: {title}</h3>
          </>
        )
      }) : 
      <>
        <h3><span className="font-semibold">id:</span> {products.id}</h3>
        <h3><span className="font-semibold">title</span>: {products.title}</h3>
      </>)}
    </div>
  )
}

export default Axios

// Is there a way to avoid destructuring multiple times?