// const names: Array<string> = []; // string[]
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

// 제약 조건(Constraints)
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// const mergeObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
//   { name: "Max", hobbies: ["Sports"] },
//   { age: 33 }
// );
//
// 타입 추론을 활용해, 사용 시점에 타입을 제공하지 않을 수 있음
const mergeObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 33 });
console.log(mergeObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Sports", "Art"])); //[Array(2), "Got 2 elements."]

//----keyof----
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}
extractAndConvert({ name: "Max" }, "name");

//----Generic Classes----
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      //not found
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Menu");
textStorage.removeItem("Max");
console.log(textStorage.getItems()); // ["Menu"]

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "Max" });
// objStorage.addItem({ name: "Menu" });
// //...
// objStorage.removeItem({ name: "Max" }); // 객체: 다른 주소. -1을 리턴해서 마지막 요소를 제거
// console.log(objStorage.getItems()); // Max가 남아있고 Menu가 지워짐

// const objStorage = new DataStorage<object>();
// let maxObj = { name: "Max" };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: "Menu" });
// //...
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

//----Generic Utility types
//--Readonly
const names: Readonly<string[]> = ["Max", "Anna"];
names.push("Manu"); //Property 'push' does not exist on type 'readonly string[]'
names.pop(); //Property 'push' does not exist on type 'readonly string[]'
