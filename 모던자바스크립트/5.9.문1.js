let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
console.log(Object.values(salaries));
//[ 100, 300, 250 ]

let sumsal = 0;
for (let salry of Object.values(salaries)) {
  sumsal += salry;
}

console.log(sumsal);
