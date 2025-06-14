// class Math {
//   static topla(x, y) {
//     console.log(x + y);
//   }
//   static cikar(x, y) {
//     console.log(x - y);
//   }
     //*static
//   carp(x, y) {
//     console.log(x * y);
//   }
//   static bol(x, y) {
//     console.log(x / y);
//   }
//   static kare(x) {
//     console.log(x * x);
//   }
//   static kup(x) {
//     console.log(x * x * x);
//   }
// }
//!static degilse nesne olusturulur ve nesne uzerinden erisilir
//const matematik = new Math();
//matematik.carp(10, 13);

//!staticlere sinif ismi ile erisilir. nesne olusturmadan erisilebilir
//Math.topla(5, 6);  









class Human {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Nesne yöntemi
    showName() {
      console.log(this.name);
    }
  
    // Statik yöntem
    static showAge(human) {
      console.log(human.age);
    }
  }
  
  const human1 = new Human("Ali", 25);
  
  // Nesne yöntemi çağrısı
  human1.showName();
  
  // Statik yöntem çağrısı
  Human.showAge(human1);