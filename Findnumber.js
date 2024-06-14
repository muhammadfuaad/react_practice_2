function sortNumbers(arr) {
  let highestNumber = arr[0]
  let secondHighestNumber = arr[0]
  let thirdHighestNumber = arr[0]

  for(let i=0; i<arr.length;i++ ){
    
    if (arr[i] > highestNumber) {
      // secondHighestNumber = highestNumber
      highestNumber = arr[i]
    } 
    if (arr[i] > secondHighestNumber && arr[i] < highestNumber) {
      secondHighestNumber = arr[i]
    } 
    // if (arr[i] > thirdHighestNumber && arr[i] < secondHighestNumber) {
    //   thirdHighestNumber = arr[i]
    // }
    console.log("highestNumber:", highestNumber)
    console.log("secondHighestNumber:", secondHighestNumber)
    console.log("thirdHighestNumber:", thirdHighestNumber)
  }
  
  // console.log(thirdHighestNumber)
  
}

// sortNumbers([1,2,3,4,5])
  
sortNumbers([1,2,3, 7, 5, 9 , 12])
