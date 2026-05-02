// uniontype

type Role = "admin" | "editor" | "viewer";

const getRole = (role: Role) => {
  if (role === "admin") {
    console.log("User is an admin");
  } else if (role === "editor") {
    console.log("User is an editor");
  } else if (role === "viewer") {
    console.log("User is a viewer");
  }
};
getRole("admin");

// intersection type
type User = {
  id: number;
  name: string;
  photo: string;
};

type Manager = {
  department: string;
  role: string;
};

type Employee = User & Manager;

const baujid: Employee = {
  id: 2,
  name: "Baujid",
  photo: "photo.jpg",
  department: "Engineering",
  role: "Software Engineer",
};
