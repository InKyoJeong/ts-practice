const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

// $ tsc using-ts.ts
// using-ts.ts:10:19 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// 10   console.log(add(input1.value, input2.value));
//                      ~~~~~~~~~~~~
