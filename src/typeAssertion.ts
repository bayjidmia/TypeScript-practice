let anything: any;
anything = "mezba";
anything as string;

const Kgtogram = (input: string | number): number | string | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split("");
    console.log(value);
    return `converted Output is ${Number(value) * 1000}`;
  }
};

const result1 = Kgtogram(100) as number;
console.log(result1);
const result2 = Kgtogram("100 kg") as string;
console.log(result2);
