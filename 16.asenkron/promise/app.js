// Promise Nedir?
// Promise, JavaScript'te asenkron işlemleri yönetmek için kullanılan bir yapıdır.
// Bir Promise, gelecekte bir değerin mevcut olacağını veya bir hatanın meydana geleceğini temsil eder.

// Promise üç durumda olabilir:
// 1. Pending (Beklemede): İşlem henüz tamamlanmamış.
// 2. Fulfilled (Tamamlandı): İşlem başarıyla tamamlandı ve bir değer döndü.
// 3. Rejected (Reddedildi): İşlem başarısız oldu ve bir hata döndü.

// Promise oluşturma
// let promise = new Promise((resolve, reject) => {
// Asenkron bir işlem gerçekleştiriyoruz (örneğin bir API çağrısı)
//   let check = true; // Bu sadece bir örnek, gerçek bir koşul olabilir

//   if (check) {
//     resolve("promise iyi durumda");
//   } else {
//     reject("haataa");
//   }
// });

// Promise kullanma
// promise
//   .then((response) => {
//     console.log(response); // İşlem başarılıysa bu çalışır
//   })
//   .catch((error) => {
//     console.error(error); // İşlem başarısızsa bu calışır
//   })
//   .finally(() => {
//     console.log("işlem bitti"); // hangi İşlem olursa olsun  tamamlandığında bu çalışır
//   });

//?---------------------------------------------------------

/*
function readStudents(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    try {
      xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
      });
    } catch (error) {
      reject(error);
    }
    xhr.open("GET", url);
    xhr.send();
    
  });
}

readStudents("students.json")
.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.error(error);
});

*/

//?---------------------------------------------------------

function getUsers(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if (xhr.status == 200) {
        resolve(xhr.responseText);
      } else {
        reject("bir hata oluştu");
      }
    };
    xhr.open("GET", url);
    xhr.send();
  });
}

getUsers("https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    console.log(data);


    console.log("daha sonra farkli asenkron işlemler yapılabilir");
  })
  .catch((error) => {
    console.error(error);
  });
