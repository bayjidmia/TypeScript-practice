const obj = {
  name: "john",
  age: 30,
  city: "New York",
  adress: {
    city: "New York",
    street: "5th Avenue",
  },
};

const name = obj["name"];
console.log(name);
const age = obj["age"];
console.log(age);
const adress = obj["adress"];
console.log(adress);
const city = obj["city"];
console.log(city);

type richpeoplevehicle = {
  car: string;
  bike: string;
  boat: string;
};

type richvehicle = keyof richpeoplevehicle;

const vehicle1: richvehicle = "car";

type obj = {
  id: number;
  name: string;
  address: {
    street: number;
    city: string;
  };
};

const obj2 = {
  id: 1,
  name: "bayjid",
  address: {
    street: 5600,
    city: "rangpur",
  },
};

const getpropertyfromobj = (value: obj, key: keyof obj) => {
  return value[key];
};

const name2 = getpropertyfromobj(obj2, "name");
console.log(name2);
