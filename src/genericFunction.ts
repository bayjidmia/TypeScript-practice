const createArraywithString = (value: string) => {
  return [value];
};

const createArraywithNumber = (value: number) => {
  return [value];
};

const createobjectwitharray = (value: { name: string; id: number }) => {
  return [value];
};

const arrString = createArraywithString("hello");
const arrNumber = createArraywithNumber(42);
const objWithArr = createobjectwitharray({ name: "bayjid", id: 1 });

// console.log(arrString);
// // Output: ["hello"]
// console.log(arrNumber);
// // Output: [42]
// console.log(objWithArr);
// // Output: [{ name: "bayjid", id: 1 }]

const convator = <T, X>(value: T, value2: X) => {
  return [value, value2];
};

const arrStringGeneric = convator("hello", "world");
console.log(arrStringGeneric);
const arrNumberGeneric = convator(42, 43);
console.log(arrNumberGeneric);
const objWithArrGeneric = convator(
  { name: "bayjid", id: 1 },
  { name: "alice", id: 2 },
);
console.log(objWithArrGeneric);
