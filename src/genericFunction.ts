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

console.log(arrString);
// Output: ["hello"]
console.log(arrNumber);
// Output: [42]
console.log(objWithArr);
// Output: [{ name: "bayjid", id: 1 }]
