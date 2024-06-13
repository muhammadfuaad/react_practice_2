// function greet(params) {
//   console.log(`Hi, ${this.name}`);
// }

const person1 = {name: "Muhammad Fuaad"}
// greet.call(person1)

const person2 ={
  name: "John Doe",
  greet: function (params) {
    console.log(`Hi ${this.name}`);
  }
}

person2.greet.call(person1)
person2.greet()
