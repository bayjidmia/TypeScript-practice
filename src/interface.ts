type User = {
  name: string;
  age: number;
};

const user1: UserwithRole = {
  name: "bayjid",
  age: 23,
  role: "admin",
};

type Isrole = {
  role: "admin" | "user";
};

type UserwithRole = User & Isrole;
