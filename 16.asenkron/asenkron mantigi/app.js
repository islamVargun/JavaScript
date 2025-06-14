/*
js senkron calisir, yani bir islem bitmeden diger islem baslamaz
 
console.log("1");
console.log("2");
console.log("sa");





? jsin asenkron calistigi yerler
1- timing
2- event
3-http istekleri


---------------CALLBACK---PROMISE----ASYNC/AWAIT----------------
ASENKRON YAPILARI SENKRON HALE GETIRIR BUNLAR









*/

console.log("slm");

setTimeout(() => {
  console.log("3 saniye sonunda calisti");
}, 3000);

setTimeout(() => {
  console.log("2 saniye sonunda calisti");
}, 2000);
setTimeout(() => {
  console.log("1 saniye sonunda calisti");
}, 1000);

console.log("as");
