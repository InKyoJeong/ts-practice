const add = (a: number, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

printOutput(add(5)); //6
