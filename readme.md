## TypeScript

[1. Basic](#basic)<br/>
[2. Compiler](#compiler)<br/>3. Next-gen js<br/>
[4. Classes & Interfaces](#classes)<br/>

<!-- 5. Advanced Types & TypeScript Features
6. Generics
7. Decorators
8. Practice - project
9. Namespaces & modules
10. Webpack & TypeScript
11. Third-Party Libraries
12. React + TS & NodeJS + TS -->

---

<br>

# <a name="basic"></a>1. TypeScript Basic

## Use

```bash
$ tsc app.ts
```

## Install

```bash
$ npm init
$ npm install --save-dev lite-server
```

## start

```bash
$ npm start
```

```json
// package.json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"
  },
```

<br>

## 튜플

> Tuple 타입은 배열과 매우 유사

- Tuple은 정해진 타입의 고정된 길이 배열을 표현하지만, 이는 할당(Assign)에 국한됨
- `push()`, `splice()`등으로 값을 넣는건 막을 수 없음

<br>

## 유니언(Union)

- 2개 이상의 타입을 허용하는 경우, 이를 유니언(Union)이라고 함
- `|`(vertical bar)를 통해 타입을 구분하며, `()`는 선택 사항

<br>

## 함수(Function)

- 화살표 함수를 이용해 타입을 지정
- 인수의 타입과 반환 값의 타입을 입력

```ts
// add는 2개의 숫자 타입 인수를 가지고, 숫자 타입을 반환하는 함수
let add: (a: number, b: number) => number;
add = function (x, y) {
  return x + y;
};

// 인수가 없고, 반환도 없는 경우.
let myFunc: () => void;
myFunc = function () {
  console.log("Hello world");
};
```

<br>

## Type Aliases & Object Types

For example, you can simplify this code:

```js
function greet(user: { name: string, age: number }) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: { name: string, age: number }, checkAge: number) {
  return checkAge > user.age;
}
```

To:

```js
type User = { name: string, age: number };

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
```

<br>

---

# <a name="compiler"></a>2. Compiler

### Using "Watch Mode"

```bash
$ npm start

$ tsc app.ts --watch
# or
$ tsc app.ts -w
```

이건 한가지 파일만 가능함

<br>

### Compiling the Entire Project / Multiple Files

```bash
$ tsc --init
# Successfully created a tsconfig.json file.

$ tsc
# 모든 ts 파일의 js 파일 생김

$ tsc --watch
```

### Exclude

```json
// tsconfing.json
//...
"exclude": [
    "analytics.ts"
  ]
}
```

`tsc` 실행시 exclude한 파일은 js생기지않음

### Include

include에 포함한것만 컴파일

```json
ex)
 "include": [
    "app.ts",
    "analytics.ts"
  ]
```

### outDir

```json
  "outDir": "./",
```

- where created files should be stored
  - ex) `"outDir": "./dist",`

### noEmitOnError

```json
 "noEmitOnError": true,
```

에러가 있으면 js파일 생성안됨

<br>

---

# 4. <a name="classes"></a>Classes & Interfaces

- 클래스의 생성자 메소드(`constructor`)와 일반 메소드(Methods) 멤버(Class member)와는 다르게, 속성(Properties)은 `name: string;`와 같이 클래스 바디(Class body)에 별도로 타입을 선언
- 클래스 바디(Class body)는 중괄호 `{}`로 묶여 있는 영역

```ts
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
```

<Br>

## 클래스 수식어(Modifiers)

- 클래스 멤버(속성, 메소드)에서 사용할 수 있는 **접근 제어자(Access Modifiers)** 들이 있음
- 접근 제어자(Access Modifiers)는 클래스, 메서드 및 기타 멤버의 접근 가능성을 설정하는 객체 지향 언어의 키워드
- `public`은 디폴트

| 접근 제어자 | 의미                                     | 범위         |
| ----------- | ---------------------------------------- | ------------ |
| `public`    | 어디서나 자유롭게 접근 가능(생략 가능)   | 속성, 메소드 |
| `protected` | 나와 파생된 후손 클래스 내에서 접근 가능 | 속성, 메소드 |
| `private`   | 내 클래스에서만 접근 가능                | 속성, 메소드 |

<br>

| 수식어     | 의미               | 범위              |
| ---------- | ------------------ | ----------------- |
| `static`   | 정적으로 사용      | 속성, 일반 메소드 |
| `readonly` | 읽기 전용으로 사용 | 속성              |

<br>

- 생성자 메소드(constructor)에서 인수 타입 선언과 동시에 접근 제어자를 사용하면 바로 속성 멤버로 정의할 수 있음

```ts
class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  // 메서드
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
}
const accounting = new Department("d1", "Accounting");

accounting.describe(); // Department (d1): Accounting
```

<br>

## static

- static 메서드 : class에서 `new`키워드 없이 directly call 할 수 있음

```ts
class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1);
```

<br>

- static 메소드는 클래스의 인스턴스 없이도 호출이 가능하지만,
  - 클래스가 인스턴스화 되면 호출이 불가능함

```ts
class StaticMethodCall {
  static staticMethod() {
    return "Static method has been called";
  }
  static anotherStaticMethod() {
    return this.staticMethod() + " from another static method";
  }
}

StaticMethodCall.staticMethod(); // 'Static method has been called'
StaticMethodCall.anotherStaticMethod(); // 'Static method has been called from another static method'

// 인스턴스화되면 정적 메소드는 사용이 불가능
const instance = new StaticMethodCall();
instance.staticMethod(); // Property 'staticMethod' is a static member of type 'StaticMethodCall'.
```

<br>

## Abstract Class (추상 클래스)

- 추상(Abstract) 클래스는 다른 클래스가 파생될 수 있는 기본 클래스. 인터페이스와 유사
- abstract는 클래스뿐만 아니라 속성과 메소드에도 사용 가능
- 추상 클래스는 직접 인스턴스를 생성할 수 없기 때문에 파생된 후손 클래스에서 인스턴스를 생성해야 함

```ts
// Abstract Class
abstract class Animal {
  abstract name: string; // 파생된 클래스에서 구현해야 함
  abstract getName(): string; // 파생된 클래스에서 구현해야 함
}
class Cat extends Animal {
  constructor(public name: string) {
    super();
  }
  getName() {
    return this.name;
  }
}
new Animal(); // Error - TS2511: Cannot create an instance of an abstract class.
const cat = new Cat("Lucy");
console.log(cat.getName()); // Lucy
```
