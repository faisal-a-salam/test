import hello, { name, num, Person } from "./component.js";
console.log(name);
console.log(num);

hello();

let person = new Person();
console.log(person.fname);

console.log("I am from index.js");
