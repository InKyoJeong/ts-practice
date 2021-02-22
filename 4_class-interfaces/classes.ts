// 생성자 메소드(constructor)에서 인수 타입 선언과 동시에 접근 제어자를 사용하면 바로 속성 멤버로 정의할 수 있음

abstract class Department {
  static fiscalYear = 2020;
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // console.log(this.fiscalYear); //Property 'fiscalYear' is a static member of type 'Department'.
    // console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  // 메서드
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // this.id = "d2"; //Cannot assign to 'id' because it is a read-only property.
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  //We can also override methods or properties of our base class.
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name); // employees는 protected. extends에서 사용가능
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

//static: class에서 new키워드 없이 directly call 할 수 있음
const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["KYO"]);

it.addEmployee("Nero");
it.addEmployee("Zero");

// it.employees[2] = "Anna"; // Property 'employees' is private and only accessible within class 'Department'

// console.log(it); // Department {name: "Accounting"}
it.describe(); // Department (d1): Accounting
it.printEmployeeInformation();

console.log(it);

// const accountingCopy = { name: "INGG", describe: accounting.describe };
// accountingCopy.describe(); //Department: INGG

const accounting = AccountingDepartment.getInstance();

// const accounting = new AccountingDepartment("d2", []);
accounting.mostRecentReport = "year end report";
accounting.addReport("Somthing went wrong..");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Mc");
// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();
