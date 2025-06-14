class Person {
  constructor(firstname,age) {
    this.firstname = firstname;
    this.age = age;
  }
  write() {
    console.log(this);
  }
}

const person = new Person("lalalal","20");
person.write();
