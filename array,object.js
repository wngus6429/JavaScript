// // Array Object
// // array는 데이터를 저장 하는 곳 인데. 리스트 같이 저장한다.

// const daysOfWeek = ['Mon','tue','wen','thu','fri'];

// console.log(daysOfWeek[4]);

// //[] 의 의미가 배열임

// object는 각 value에 이름을 줄 수 있음.

// const wngusinfo = {
//   name: "nico",
//   age: "27",
//   gender: "male",
//   ishansome: true,
//   favmovie: ["along the god", "lot", "game"],
//   favfood: [
//     { name: "kinchi", fatty: "chicken" },
//     { name: "chill", fatty: "good" }
//   ]
// };

// console.log(wngusinfo.gender);

// wngusinfo.gender = "female";

// console.log(wngusinfo.gender);

// 자바스크립트의 재미 있는 점인데.
// const해도 안에 내용은 바꿀 수 있음.

// object를 array안에 넣을 수 있음.

const wngusinfo = {
  name: "nico",
  age: "27",
  gender: "male",
  ishansome: true,
  favmovie: ["along the god", "lot", "game"],
  favfood: [{ name: "kinchi", fatty: "chicken" }, { rule: "callof" }],
  favgame: { fun: "game" }
};

console.log(wngusinfo.favfood[0].fatty);
//  자바스크립트에서는 ,(콤마) 를 잘 확인해야한다
//그리고 string을 쓸때 ""를 앞 뒤로 해주는 것도 잊지 않도록
