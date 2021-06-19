// const title = document.querySelector("#title");

// const CLICKED_CLASS = "clicked";

// function handleClick() {
//   const currentClass = title.className;
//   if (currentClass !== CLICKED_CLASS) {
//     title.className = CLICKED_CLASS;
//   } else {
//     title.className = "";
//   }
// }

// function init() {
//   title.addEventListener("click", handleClick);
// }
// init();

//className 쓰니까. 한번 바뀌면 btn이 더 이상 표시되지 않아서
//classList를 사용한다.

const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
  //   const hasClass = title.classList.contains(CLICKED_CLASS);
  //   if (hasClass) {
  //     title.classList.remove(CLICKED_CLASS);
  //   } else {
  //     title.classList.add(CLICKED_CLASS);
  //   }
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
