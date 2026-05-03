// generic types in array

type Generic<T> = Array<T>;

const number: Generic<number> = [4, 2, 3, 4, 5];
const string: Generic<string> = ["a", "b", "c", "d", "e"];
const boolean: Generic<boolean> = [true, false, true, false, true];

// generic types in function

function identity<T>(arg: T): T {
  return arg;
}
console.log(identity<number>(123));
console.log(identity<string>("hello"));
console.log(identity<boolean>(true));

// generic in arrayobject

const arrayobject: Generic<{
  name: string;
  age: number;
}> = [
  {
    name: "jhon",
    age: 30,
  },
  {
    name: "doe",
    age: 25,
  },
];
