// //const title = document.getElementById("title");
// const title = document.querySelector("#title");
// //id로 선택해 보겠다는것임. #로

// title.innerHTML = "hi! From JS";
// title.style.color = "red";
// document.title = "i won you are";

// const title = document.querySelector("#title");

// function handleResize(event) {
//   console.log(event);
// }
// window.addEventListener("resize", handleResize);

const title = document.querySelector("#title");

function handleClick() {
  title.style.color = "blue";
}
title.addEventListener("click", handleClick);
