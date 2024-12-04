//객체 기본값을 지정하는 내용
//const test  = function(name, age, color,status="이상없음"){
//return `${name} : ${age} : ${color} : ${status}`}
// console.log(testest("구름", 7 , 흰색))


const test = function(object){
    //과거방법 1
    object.status = object.status !== undefined ? object.status : "이상없응"
    //과거방법 2
    object.status = object.status ? object.status : "이상없음"
    //과거방법 3
    object.status = object.status || "이상없음"
    //현대방법 1
    object = {status : "이상없음", ...object}
    //현대방법2
    fun = function({name,age,color,status = "이상없음"}){
    return `${name} : ${age} : ${color} : ${status}`
}
return `${object.name} : ${object.age} : ${object.color} : ${object.status}`}
console.log(test(`설탕`,5,`흰색`))
console.log(test({
    name: "설탕",
    age: 5,
    color: "흰색"
}))
