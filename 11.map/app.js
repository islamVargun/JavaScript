//map --------- key value olarak calisir

const map1 = new Map();
//SET
map1.set(34, "istanbul");
map1.set(36, "kars");
map1.set(6, "ankara");

//GET
// console.log(map1.get(6));
// console.log(map1.get(34));
// console.log(map1.get(36));

// SIZE
// console.log(map1.size);

//DELETE
// console.log(map1.delete(6));
// console.log(map1.get(6)); //?sildigimiz icin yok

//HAS
// console.log(map1.has(33));

//for of ile map uzerinde donmek

// for (let [plaka, sehir] of map1) {
//   console.log(plaka,sehir );
// }

//KEYS

// const keys = Array.from(map1.keys());
// console.log(keys);

// keys.forEach((key) => {
//     console.log(key, map1.get(key));
// });

//mapten arraya cevirmek

const array = Array.from(map1);
console.log(array);
