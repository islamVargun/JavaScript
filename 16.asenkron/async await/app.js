/*

document.querySelector("#button").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((post) => {
      console.log(post);
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.Id}`)
        .then((response) => response.json())
        .then((commands) => console.log(commands));
    })
    .catch((err) => console.log(err));
});

*/
//async await ile yapılan hali

/*
document.querySelector("#button").addEventListener("click",async () => {
const responsePost= await fetch("https://jsonplaceholder.typicode.com/posts/1");
const post=await responsePost.json();
const responseComments=await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
const comments=await responseComments.json();


console.log(comments);
  
});

*/

//daha kisa hali
document.querySelector("#button").addEventListener("click",async () => {
  const responsePost= await(await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();  
  const comments=await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${responsePost.id}`)).json();
  console.log(responsePost,comments);
    
  });
