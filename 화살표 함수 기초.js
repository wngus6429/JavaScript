// let sum = (a, b) => a + b;
// console.log(sum(2, 3));

let ask = (question, yes, no) => {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
};

ask(
  "동의하십니까?",
  () => alert("동의하심"),
  () => alert("취소버튼 누름")
);
