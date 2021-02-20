// const person: { name: string; age: number } = {

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // 튜플
// } = {
//   name: "INGG",
//   age: 11,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

const person = {
  name: "INGG",
  age: 11,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10; // error
// person.role = [0, "admin", "user"]; // error

let favoriteAcivities: string[];
favoriteAcivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()); //Error
}

if (person.role === Role.AUTHOR) {
  console.log("is admin");
}
