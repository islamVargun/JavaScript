//what is this callback function?


//bir fonksiyonun parametre olarak başka bir fonksiyon alması ve bu fonksiyonu çağırması durumuna callback function denir.
function getName(callback) {
  setTimeout(() => {
    console.log("islam");
    callback();
  }, 1100);
}

function getSurName() {
  setTimeout(() => {
    console.log("vargun");
  }, 1000);
}

getName(getSurName);

