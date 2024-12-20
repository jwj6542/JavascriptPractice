//함수를 만들고 즉시 호출하는 함수 -> 즉시 호출함수


const a = function(){}
a() 를 곧바로 실행하는 코드
//같은의미
const a = (function(){})()
// 왜 사용하는가?
//여러명의 사람들이 개발을 하면 함수이름에서 겹쳐 오류가 나기때문에 충돌을 피하기위해 즉시호출 함수를 사용
// 상수와 변수들이 한 함수 내에서만 작동하기 때문에 서로 충돌하지 않음 


//엄격모드
//자바스크립트는 너무나도 유연한 언어이기 때문에 스스로 리밋을 걸어버리는 코드


"use strict"  //사용시 상수인지 변수인지 확인이 안되기때문에 문제없이 작동이 되어도 오류를 낸다
a=10
b=10 

alert(a+ ":" +b)   //이렇게 해도 실행이 되지만 상수인지 변수인지 확인불가

//위처럼 작성이 모든 코드에 엄격히 통제할 수 있기 떄문에 한 코드에서만 사용하기 위해 IIFE를 사용

(function (){
    "use strict"
})()  //이렇게 사용하면 이 함수 내에서만 엄격모드 작동, 공동작업시 많이 사용