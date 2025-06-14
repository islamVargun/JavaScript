class Person {
  firstname = "islam";
  write() {
    console.log(this.firstname);
  }
}
class student extends Person {
  write() {
    console.log(`person sinifindan geldi: ${this.firstname}`);
  }
}

const person = new Person();
person.write();
const student1 = new student(); 
student1.write();
