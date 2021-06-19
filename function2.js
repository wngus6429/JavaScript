// const title = document.querySelector("#title");

// const BASE_COLOR = "blue";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick() {
//   const currentColor = title.style.color;
//   if (currentColor === BASE_COLOR) {
//     title.style.color = OTHER_COLOR;
//   } else {
//     title.style.color = BASE_COLOR;
//   }
// }

// function init() {
//   title.style.color = BASE_COLOR;
//   title.addEventListener("click", handleClick);
// }
// init();

//내 타이틀을 클릭하면 지금가진 색깔을 가져올 예정

const title = document.querySelector("#title");
const BASE_COLOR = "blue";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}
function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
}
init();

//////////////////////
function handleOffline() {
  console.log("byebye");
}
function handleOnline() {
  console.log("welcome asshoel");
}
Window.addEventListener("offline", handleOffline);
//이 4줄은 인터넷 끊고 오프라인이 되면 콘솔로그함.
window.addEventListener("online", handleOnline);
