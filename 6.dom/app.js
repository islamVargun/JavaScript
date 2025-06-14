//Document Objesi

// console.log(window);

// let value;

// console.log(document);

// value = document.location.href;
// value = document.location.hostname;
// value = document.location.port;
// value = document.location.pathname;

// value = document.all;
// value = document.characterSet;

// value = document.title;
// value = document.links.item(4);
// value = document.links.item(4).id;
// value = document.links.item(4).getAttribute("id");
// value = document.links.item(4).getAttribute("class");
// value = document.links.item(4).classList[3];

// value  = document.forms.item(1).children;

// value = document.domain;
// value = document.contentType;
// console.log(value);
//* seciciler

//!getelementbyıd

// const button=document.getElementById("todoAddButton")

// console.log(button);
// console.log(button.id)
// console.log(button.getAttribute("id"))
// console.log(button.className)
// console.log(button.getAttribute("class"))
// console.log(button.classList)
// console.log(button.classList[3])

// foreach ile herbirini yazdırdım
// button.classList.forEach(function(className){
//     console.log(className)
// })

// let buttontext=button.textContent;
// console.log("butonun texti: "+buttontext)

//!getelementbyclassname

// const todolist=document.getElementsByClassName("list-group-item")
// console.log(todolist)

//!getelementbytagname /etiket ismine gore

// const forms=document.getElementsByTagName("form")
// console.log(forms)
// console.log(forms[0])
// console.log(forms[1].id)
// console.log(forms[0].id)

// const list=document.getElementsByTagName("li")
// console.log(list)

//!query selector- query selector All(diger 3 methodun yaptıgını bu tek basına yapıyor)

// const select=document.querySelector("#todoClearButton")

// console.log(select)
// console.log(document.querySelector(".list-group-item")) //bir tane geldi bu yuzden birden falza oldugunda queryselectorAll kullanacagız
// console.log(document.querySelectorAll(".list-group-item"))
// console.log(document.querySelectorAll(".list-group-item")[2])
// console.log(document.querySelector(".list-group"))
// console.log(document.querySelectorAll("li"))
// console.log(document.querySelectorAll("li:first-child"))
// console.log(document.querySelectorAll("li:nth-child(3)"))
// console.log(document.querySelectorAll("li:last-child"))

//!style ozelligi ile uygulamalar

// const todo=document.querySelectorAll(".list-group-item")[0];
// console.log(todo)
// todo.style.color="green"
// todo.style.backgroundColor="#000"
// todo.style.fontWeight="900"
// todo.style.paddingTop="25px"
// todo.style.paddingLeft="50px"
// document.querySelector(".list-group").style.marginBottom="20px"
// document.querySelector(".list-group").style.marginTop="90px"

// document.querySelector("#todoClearButton").style.backgroundColor="red"
// document.querySelector("#todoClearButton").style.fontWeight="bold"
// document.querySelector("#todoClearButton").style.borderRadius="50px"

//!html elementleri uzerinde gezinme

// const todoo = document.querySelector(".list-group-item");
// const todolist = document.querySelector(".list-group");
// const card = document.querySelector(".card");
// const row = document.querySelector(".row");
// let deger;
//? ebeveynden cocuklara erismek
// deger = todolist;
// deger = todolist.children[0];
// deger=todolist.children[2];
// deger=todolist.children[todolist.children.length-1];
// deger=todolist.children[3].textContent="degistir"
// deger=Array.from(todolist.children);
// deger.forEach(function(todoo){
//     console.log(todoo.textContent)
// })

//? cocuktan ebeveyne erisme
// deger = todoo;
// deger = todoo.parentElement.parentElement

//? kardesler arasında gezinmek
// deger = todoo;
// deger=todoo.nextElementSibling
// deger=todoo.previousElementSibling
// console.log(deger);
// deger = row.children[0].children[3].children[0].textContent = "this is list";
// deger = row.children[0].children[0].nextElementSibling.nextElementSibling.nextElementSibling.children[0].nextElementSibling.nextElementSibling.children[2].textContent="todoooo"
// console.log(deger);

//? dinamik olarak element olusturma

// const link = document.createElement("a");

// const card_body = document.querySelectorAll(".card-body")[1];

// link.id = "goInstagram";
// link.className = "btn btn-dark btn-sm mt-3";
// link.href = "https://www.instagram.com";
// link.target = "_blank";
// link.textContent = "go to instagram";

// card_body.appendChild(link);

// console.log(link);

//? dinamik olarak element silme

//  const todolist1 = document.querySelectorAll(".list-group");
// const todos= document.querySelectorAll(".list-group-item");
// todos[0].remove();
// todos[1].remove();
// todos[todos.length-1].remove();
// console.log(todos);

//! elementlerin yerini degistirmek

// const card_body1 = console.log(document.querySelectorAll(".card-body"))[1];
// const newHeader = document.createElement("h2");
// newHeader.className = "card-title";
// newHeader.textContent = "todo listesi new knk";

// card_body1.replaceChild(newHeader, card_body1.childNodes[1])

//* eventler(olaylar)

//  function changeTitle() {
//    document.querySelectorAll(".card-title")[1].textContent =
//      "todolistessssssiii";
//    console.log("baslik degisti");
//  }

//? addeventlistener kullanimi

// const clearButton = document.querySelector("#todoClearButton");
// clearButton.addEventListener("click",function(){
//   alert("merhaba");
// ya da

// });
// clearButton.addEventListener("click", changeTitle);

// function changeTitle(e) {
//   console.log(e.target);
//   console.log(e.target.textContent);
//   console.log(e);
// }

//? mouse eventleri

// document.addEventListener("DOMContentLoaded", run);
// function run() {
//   console.log("sayfa yuklendi");
// }

// window.addEventListener("load", run);
// function run() {
//   console.log("sayfa yuklendi");
// }

// const cardtitle2 = document.querySelectorAll(".card-title")[1];

// cardtitle2.addEventListener("click", run1);
// function run1() {
//   console.log("sayfa yuklendiii");
// }

// const cardbody2 = document.querySelectorAll(".card-body")[1];

// cardbody2.addEventListener("mouseover", run);
// function run(e) {
//   console.log(e.type);
// }

//! klavye eventlari

//?  keypress harf ve sayilarda tetiklenen event
//?  keydown harf sayilar ve klavyedeki diger tuslarda da tetiklenir
//?  keyup tustan elimizi kaldirdigimiza calisan event

// document.addEventListener("keypress", run);
// function run(e) {
// console.log(e.key) //? girilen degertin kendisi
//Console.log(e.type) //? tip
//console.log(e.keyCode); //? asci tablosundaki karsiligi
// }

// document.addEventListener("keydown", run);
// function run(e) {
//   console.log(e.key);
// }

// document.addEventListener("keyup", run);
// function run(e) {
//   console.log(e.key);
// }

//!input eventleri
//focus
//blur
//copy
//paste
//cut
//select
