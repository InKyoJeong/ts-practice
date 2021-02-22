const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(4, 5, 10, 2.7);
console.log(addedNumbers); //21.7
