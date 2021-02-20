## TypeScript

1. TypeScript Basic
2. Compiler & Configuration Deep
3. Next-gen JS Code
4. Classes & Interfaces
5. Advanced Types & TypeScript Features
6. Generics
7. Decorators
8. Practice - project
9. Namespaces & modules
10. Webpack & TypeScript
11. Third-Party Libraries
12. React + TS & NodeJS + TS

---

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
