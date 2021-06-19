let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

sumSalaries = (salaries) => {
  let sum = 0;
  for (let 급여 of Object.values(salaries)) {
    sum += 급여;
  }
  return sum;
};

console.log(sumSalaries(salaries));

답 650 나왔음 ㅎㅎ

//급여 정보가 저장되어있는 객체 salaries가 있습니다.
//Object.values 와 for..of 반복문을 사용해 모든 급여의 합을 반환하는 함수 sumSalaries(salaries)를 만들어보세요.
//salaries가 빈 객체라면, 0이 반환되어야 합니다.
