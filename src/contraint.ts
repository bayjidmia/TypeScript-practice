interface Student {
  name: string;
  age: number;
}

const leve2student = <T extends Student>(student: T) => {
  return { enroll: "next level", ...student };
};

const student1 = { name: "John", age: 20, hascar: true };

const student2 = { name: "Jane", age: 22, hascar: false };
const student3 = { name: "Doe", age: 25, hascar: true };
const level2student1 = leve2student(student1);
console.log(level2student1);
const level2student2 = leve2student(student2);
console.log(level2student2);
const level2student3 = leve2student(student3);
console.log(level2student3);


