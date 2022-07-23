// To make website responsive

let burger=document.querySelector(".burger");

let left=document.querySelector(".left");

let right=document.querySelector(".right");

let navlist=document.querySelector(".nav");

burger.addEventListener("click",function(){

right.classList.toggle('v-class-resp');
left.classList.toggle('v-class-resp');
navlist.classList.toggle('h-nav-resp2');
});