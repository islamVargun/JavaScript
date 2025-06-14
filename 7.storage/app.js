//? session storage kullanimi(oturum depolama)
// verileri depolamak icin hafizadir oturum,pc,tarayici acikken calisir sonra silinir
// window.sessionStorage;

//!deger ekleme
// sessionStorage.setItem("name", "islam");
// sessionStorage.setItem("surname", "vargun");

//!deger silme

// sessionStorage.removeItem("name");
//-----------
// let value = sessionStorage.getItem("surname");
// console.log(value);

//!session storage - array yazdirma

// let names = ["ali", "memet", "amet", "adem"];
// sessionStorage.setItem("names", JSON.stringify(names));

// let value = JSON.parse(sessionStorage.getItem("names"));
// value.forEach(function (name) {
//   console.log(name);
// });

//? local storage kullanimi (yerel depolama)
// session ile kullanimi tamamen ayni

localStorage.setItem("1", "islam");
localStorage.setItem("2", "firat");
localStorage.setItem("3", "arda");
let value = localStorage.getItem("1");
console.log(value);

// localStorage.removeItem("1");

// localStorage.clear();
