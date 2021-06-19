let day = ["Mon", "Tues", "Wed"]
let other = ["Thu", "Fri", "Sat", "Sun"]
let allDays = day + other;
console.log(allDays)

// let days = ["Mon", "Tues", "Wed"]
// let others = ["Thu", "Fri", "Sat", "Sun"]
// let allDayss = [days + others];
// console.log(allDayss)

const days = ["Mon", "Tues", "Wed"]
const others = ["Thu", "Fri", "Sat", "Sun"]
const allDayss = [...days, ...others, "성공"];
console.log(allDayss)
//...은 배열을 가져와서 unpack 해서 그 안의 아이템을 전달한다.

const ob = {first:"home1", second:"home2"}
const ab = {third:"home3"}
const obab = {...ob, ...ab};
console.log(obab);

const candidate = Array(45).fill().map((index, number) => number + 1)
console.log(candidate)

const shuffle = [];
while(candidate.length > 0){
    const random = Math.floor(Math.random() * candidate.length)
    const spliceArray = candidate.splice(random, 1);
    console.log(candidate[1])
    console.log(spliceArray)
    const value = spliceArray[0];
    shuffle.push(value)
}
console.log(shuffle)