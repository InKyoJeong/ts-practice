## TypeScript

[1. Basic](#basic)<br/>
[2. Compiler](#compiler)<br/>

<!-- 2. Next-gen JS Code
3. Classes & Interfaces
4. Advanced Types & TypeScript Features
5. Generics
6. Decorators
7. Practice - project
8. Namespaces & modules
9. Webpack & TypeScript
10. Third-Party Libraries
11. React + TS & NodeJS + TS -->

---

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
