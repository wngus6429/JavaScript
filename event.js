const btn = document.querySelector("#btn");
const handleclick = (event) => console.log(event.layerX);
btn.addEventListener("click", handleclick);
/////////////////////////////////////////////////////////////
//밑에는 실행시 clickgood 이 콘솔에 나온다
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  console.log("clickgood");
});
