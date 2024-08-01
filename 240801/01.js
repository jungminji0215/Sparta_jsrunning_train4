// 1.
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  getName() {
    return this._name;
  }

  getAge() {
    return this._age;
  }

  info() {
    console.log(`저의 이름은 ${this._name} 나이는 ${this._age} 입니다.`);
  }
}

// 2.
const jung = new Person("yuno", "20");
jung.info();

// 3.
class Student extends Person {
  constructor(name, age, study) {
    super(name, age);
    this._study = study;
  }

  getStudy() {
    return this._study;
  }
}

// 4.
const student1 = new Student("준현", "12000", "javascript");
console.log(student1.getName());
console.log(student1.getAge());
console.log(student1.getStudy());

// 5.
class Tutee extends Person {
  constructor(name, age, study) {
    super(name, age);
    this._study = study;
  }

  getStudy() {
    return this._study;
  }

  info() {
    console.log(
      `저의 이름은 ${this._name} 나이는 ${this._age} 입니다. ${this._study} 를 학습하고 있습니다.`
    );
  }
}

const tutee1 = new Tutee("준현", "12000", "javascript");
tutee1.info();

// 6.
console.log(Student.prototype instanceof Person);
console.log(tutee1 instanceof Student);
