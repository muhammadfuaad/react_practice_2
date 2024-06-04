const winnerLogicFunction = () => {
  const length = 3
  const area = 9
  const horizontalArrays = [];
  const verticalArrays = [];

  
  for (let i = 0; i < length; i++) {
    horizontalArrays.push([]);
    verticalArrays.push([]);
  }
 
  console.log("horizontalArrays:", horizontalArrays);
  console.log("verticalArrays:", verticalArrays);
  let num = 0

  for (let i=0; i<area; i++) {
    
    if(i<length) {
      console.log("num 1:", num);
      horizontalArrays[num].push(i)
    } else if(i>= length && i<2*length) {
      num++
      console.log("num 2:", num);

      horizontalArrays[num].push(i)
    } else if(i>= 2*length && i<3*length) {
      num++
      console.log("num 3:", num);

      horizontalArrays[num].push(i)
    }
    
  }
  
  for (let i=0; i<length;i++) {
    
  }
}
winnerLogicFunction()