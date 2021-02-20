type Combinable = number | string; // union 타입을 저장
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  //   input1: number | string,
  input1: Combinable, // 이렇게 사용가능
  input2: number | string,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 50, "as-number");
console.log(combinedAges); //80

const combinedNames = combine("IN", "GG", "as-text");
console.log(combinedNames); //INGG
