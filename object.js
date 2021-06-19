const ironna = {
    name:"park",
    you:"man",
    hobby:"bike"
}
const { you, hobby, name="what"} = ironna
console.log(you, hobby, name) //man, bike
//////////////////////////////////////////////
const wngusinfo = {
    namee: "park",
    age: "27",
    gender: "male",
    ishansome: true,
    favmovie: ["along the god", "lot", "game"],
    favfood: [{ name: "kinchi", fatty: "chicken" }, { rule: "callof" }],
    favgame: { fun: "game" }
  };
const { namee, age, gender:king, favgame:{fun}} = wngusinfo
console.log(namee, age, fun, king); //park 27 game male
//gender:king은 받을 변수 이름을 바꿔주는거임
//favgame:{} 이렇게 하면 안에 들어있는 변수명을 찾는거 