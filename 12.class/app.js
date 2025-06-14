class Person {
  //class

  /*
    1-ozellikler
    2- constructor
    3- function
    
    
    */
  constructor(name, surname, age, amount) {
    // console.log("Person object created");
    this.isim = name;
    this.soyisim = surname;
    this.yas = age;
    this.maas = amount;
  }
  showInfo() {
    console.log(
      `
    isim: ${this.isim} 
    soyisim: ${this.soyisim}
    yas: ${this.yas} 
    maas: ${this.maas}
    `
    );
  }
}

//object create
const person1 = new Person("islam", "vargun", 25, 50000);
const person2 = new Person("ali", "kemal", 24, 1000);
person1.showInfo();
person2.showInfo();
// bir sinifin ozelliklerini constructorlarini functionlari kullanmak istersek nesne uretmemiz lazim
