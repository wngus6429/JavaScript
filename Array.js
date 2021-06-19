let day = ["Mon", "Tues", "Wed"];
let other = ["Thu", "Fri", "Sat", "Sun"];
let allDays = day + other;
console.log(allDays); // Mon,Tues,WedThu,Fri,Sat,Sun

let days = ["Mon", "Tues", "Wed"];
let others = ["Thu", "Fri", "Sat", "Sun"];
let allDayssd = [days + others];
console.log(allDayssd); // [ 'Mon,Tues,WedThu,Fri,Sat,Sun' ]

const ddays = ["Mon", "Tues", "Wed"];
const oothers = ["Thu", "Fri", "Sat", "Sun"];
const aallDayss = [...ddays, ...oothers, "성공"];
console.log(aallDayss); //['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '성공' ]
//...은 배열을 가져와서 unpack 해서 그 안의 아이템을 전달한다.

const ob = { first: "home1", second: "home2" };
const ab = { third: "home3" };
const obab = { ...ob, ...ab };
console.log(obab); // { first: 'home1', second: 'home2', third: 'home3' }

const candidate = Array(45)
  .fill()
  .map((index, number) => number + 1);
console.log(candidate);
//[ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]

// const shuffle = [];
// while (candidate.length > 0) {
//   const random = Math.floor(Math.random() * candidate.length);
//   const spliceArray = candidate.splice(random, 1);
//   console.log(candidate[1]);
//   console.log(spliceArray);
//   const value = spliceArray[0];
//   shuffle.push(value);
// }
// console.log(shuffle);
