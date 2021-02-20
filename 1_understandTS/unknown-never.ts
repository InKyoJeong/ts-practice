//unknown
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
// userName = userInput; // Type 'unknown' is not assignable to type 'string'

if (typeof userInput === "string") {
  userName = userInput;
}

//never = 절대 발생하지 않을 값
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An Error occurred", 500);
