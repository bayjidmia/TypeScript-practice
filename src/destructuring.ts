// destructuring in obj
const person = {
  name: "bayjid",
  age: 23,
  studentinfo: {
    roll: 101,
    class: "12th",
  },
};

const {
  name,
  studentinfo: { roll },
} = person;
console.log(roll);
console.log(name);
