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

// interface : object type declaration :array,obj,function
interface IUser {
  name: string;
  age: number;
}

const user2: IUser = {
  name: "bayjid",
  age: 23,
};

interface IAdmin extends IUser {
  role: "admin" | "user";
}
const user3: IAdmin = {
  name: "bayjid",
  age: 23,
  role: "admin",
};
