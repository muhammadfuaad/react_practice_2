function sortNumbers(arr) {
  
  
  
  for(let i=0; i<arr.length;i++ ){
    let highest = arr[i];
    let secondHighest = arr[i];
    let thirdHighest = arr[i];
    if (arr[i] > highest) {
      secondHighest = highest
      highest = arr[i]
    }
    console.log(highest)
    // console.log(secondHighest)
     
  }
  
  // console.log(thirdHighest)
  
}
  



sortNumbers([1,2,3, 7, 5])
