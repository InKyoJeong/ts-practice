// array
const hobbies = ["Sports", "Cooking"];
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2); // ["Sports", "Cooking"] "Sports" "Cooking"

// object
const person = {
  fistName: "INKYo",
  age: 33,
};

const { fistName: userName, age } = person;
console.log(userName, age, person); //INKYo 33 {fistName: "INKYo", age: 33}
