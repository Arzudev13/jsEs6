const person = {
    name: "tima",
    year: 20,
};
const defaults = {
    name: "user",
    yaer: 18,
    host: "localhost",
}

const user = {...defaults, ...person}
const us = {}

for (key in person){
    us[key] = person [key]
  }

console.log(us);
console.log(user);


function count(...arguments) {
    console.log(arguments)
}

count (12, 4, 5, 6, 60)


const mass = [2, 3, "text"]
const mass2 = [22, 33, "som"];
const shallowCopy = [...mass, ...mass2];
console.log(shallowCopy)


