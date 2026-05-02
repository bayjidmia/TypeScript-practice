const user1: User = {
  id: 1,
  name: {
    firstName: "jhon",
    lastName: "doe",
  },
  gender: "male",
  contactNo: "017173467",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};
console.log(user1);
// type alias
type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: "017173467";
  address: {
    city: string;
    country: string;
  };
};
