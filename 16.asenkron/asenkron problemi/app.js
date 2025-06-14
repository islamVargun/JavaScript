//problem
// Asenkron bir işlemi senkron bir şekilde yapmaya çalışırsak, işlemi beklerken diğer işlemleri durdururuz.
// Bu durumda işlemler sırayla yapılır.

const user = [
  {
    id: 1,
    name: "Ahmet post 1",
  },
  {
    id: 2,
    post: "Mehmet post 1",
  },
  {
    id: 3,
    post: "Ali post 1",
  },
  {
    id: 4,
    post: "Ali post 1",
  },
  {
    id: 4,
    post: "Ali post 2",
  },
];

function getUserId(callback) {
  setTimeout(() => {
  const userId = 4;
  console.log("kullanici id alindi: ",userId)
    callback(userId);
  }, 1000);
}

function getPostByUserId(userId) {
  setTimeout(() => {
    user.forEach((user) => {
      if (user.id === userId) {
        console.log(user.post);
      }
    });
  }, 1000);
}
getUserId(getPostByUserId);
