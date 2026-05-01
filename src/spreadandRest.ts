// spread operator

const user = ["jhon", "doe", "smith"];
const newuser = ["hello", "nello", "jalo"];

user.push(...newuser);
console.log(user);

const object1 = {
  name: "jhon",
  age: 30,
  city: "new york",
};

const object2 = {
  balance: 1000,
  country: "usa",
};

const newobj = { ...object1, ...object2 };
console.log(newobj);

// rest operator
const nominatino = (...names: string[]) => {
  names.map((name) => {
    console.log(name);
  });
};

nominatino("jhon", "doe", "smith");
