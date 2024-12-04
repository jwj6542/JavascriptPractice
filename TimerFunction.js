//setTimeout()  특정한 시간 후에 한번
//setInterval() 특정한 시간마다

const a = setTimeout(function(){
    console.log("setTimeout 함수 입니다")
},1000)
const b = setInterval(function(){
    console.log("setInterval 함수 입니다")
},1000)

console.log(a,b)

clearTimeout(a)
clearInterval(b)  //한번씩만 실행하고 종료시켜버림

