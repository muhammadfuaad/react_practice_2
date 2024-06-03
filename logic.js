const winnerLogicFunction = () => {
  const length = 3
  const area = 9
  const firstHorizontalArray = []
  const secondHorizontalArray = []
  const thirdHorizontalArray = []
  
  for (let i=0; i<area; i++) {
    
    if(i<length) {
      firstHorizontalArray.push(i)
    } else if(i>= length && i<2*length) {
      secondHorizontalArray.push(i)
    } else if(i>= 2*length && i<3*length) {
      thirdHorizontalArray.push(i)
    }
    console.log("firstHorizontalArray:", firstHorizontalArray);
    console.log("secondHorizontalArray:", secondHorizontalArray);
    console.log("thirdHorizontalArray:", thirdHorizontalArray);
  }
  
  for (let i=0; i<length;i++) {
    
  }
}
winnerLogicFunction()