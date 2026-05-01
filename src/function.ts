// Function
// row function and normal function

function add(a: number, b: number) {
  return a + b;
}

const odd = add(11, 2);
console.log(odd);

// method function
const person = {
  name: "jhon",
  age: 30,
  balance: 0,
  addBalance(amount: number): number {
    const totalbalance = this.balance + amount;
    return totalbalance;
  },
};
console.log(person.addBalance(10010));

// callback function

const arr: number[] = [1, 2, 3, 4, 6];
const newarr = arr.map((element: number): number => element * 2);
console.log(newarr);
