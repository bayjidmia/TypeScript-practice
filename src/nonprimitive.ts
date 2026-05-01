// array ,object
let bazarlist: string[] = ["apple", "banana", "orange"];

let mixedarr: (string | number)[] = ["apple", 10, "tomato", 2, "orange", 3];

const coordintes: [number, number] = [1, 3];

let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, "Coding God was here"];

ourTuple.push("Hello World");
ourTuple.push(10);
ourTuple.push(true);
console.log(ourTuple);

// reference type : object

let user: {
  organization: "tech crop"; //  literal type
  firstname: string;
  middlename?: string; // optional type
  lastname: string;
} = {
  organization: "tech crop",
  firstname: "jhon",
  middlename: "doe",
  lastname: "smith",
};

console.log(user);
