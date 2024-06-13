const object = { a: 1, b: 2, c: 3 };
const arr = [1,2,3]

for (const element in object) {
  // console.log(`${element}: ${object[element]}`);
  console.log(element);
}

for (const element in arr) {
  console.log(element);
}

for (const element of object) {
  // console.log(`${element}: ${object[element]}`);
  console.log(element);
}

for (const element of arr) {
  console.log(element);
}

// Notes:
// "for in" loop works for both objects and arrays and iterates over the keys(in case of objects) and index(in case of arrays).
// "for of" loop works only for arrays and iterates over the array elements.