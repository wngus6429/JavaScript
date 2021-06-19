function sayHello(name){
    return "Hello" + name;
}
const good = sayHello("juhyun")
console.log(good)
////////////////////////////////////////////////////////
const SayHello =(name) => {
    return "Hello" + name;
}
const goo = SayHello("gameing")
console.log(goo)
////////////////////////////////////////////////////////
//중괄호를 하지 않으면 함축적으로 return이 됨
const Hello = (name) => "Hello" + name;
const gooh = Hello("simple")
console.log(gooh)
////////////////////////////////////////////////////////
const nuclear = (name = "Nuclear") => "Hello" + name;
const nucl = nuclear()
console.log(nucl) // HelloNuclear
////////////////////////////////////////////////////////
const backtick = (name = "Nuclear") => `Hello + ${name}`;
const backucl = backtick("backtickc")
console.log(backucl) // HelloNuclear