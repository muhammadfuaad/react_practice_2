export default function AssignmentTask(params) {
  axios.get("http://fakestoreapi.com/products").then((data)=>{
    console.log("data:", data);
  })
  return (
    <>
      {/* {data.map((element)=>element.name)} */}
      <h1>Users List</h1>
    </>
  )
}