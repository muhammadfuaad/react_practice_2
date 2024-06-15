function sortNumbers(arr) {
  let highestNumber = arr[0];
  let secondHighestNumber = arr[0];
  let thirdHighestNumber = arr[0];

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > highestNumber) {
      thirdHighestNumber = secondHighestNumber
      secondHighestNumber = highestNumber
      highestNumber = arr[i];
    } 
    
    debugger;
    
    console.log("highestNumber:", highestNumber);
    console.log("secondHighestNumber:", secondHighestNumber);
    console.log("thirdHighestNumber:", thirdHighestNumber);

  }
}

sortNumbers([1, 2, 3, 7, 5, 9, 12]);