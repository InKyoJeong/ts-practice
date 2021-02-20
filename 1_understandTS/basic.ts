function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result); // result is: 7.8
  } else {
    return n1 + n2;
  }
}

const num1 = 5;
const num2 = 2.8;
const printResult = true;
const resultPhrase = "result is: ";

add(num1, num2, printResult, resultPhrase);
