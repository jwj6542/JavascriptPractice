 //const test = function(array, CallbackF)  // CallbackF의 값이나와 배열에 들어가 적용됨
 //{     
  //  for(const value of array){
// //       CallbackF(value)
//    }
//}
//
//const 함수 = function(callback_variable){
//    console.log(`${callback_variable}번째 안녕하세요`)
//}
//test([412,53,124,63],함수)


//배열의 요소의 값이 나옴 
// ex) 53 0 ->(4) [52,512,6242,53]
//     512 1 ->(1) [52,512,6242,53]

const 테스트 = function(배열, 콜백함수){
    for(const 값 of 배열){
        콜백함수(값)
    }
}
테스트([52,241,512,623], function(콜백함수의_매개변수){
    console.log(`${콜백함수의_매개변수}번째 안녕하세요`)
})

const 배열   = [52,512,6242,53]
배열.forEach(function(value, index, array){
    console.log(value,index,array)
})

//핵심 forEach는 배열의 요소를 콜백함수를 반복해서 전달해주는 문법이다
const 배열 = [273,52,32,57]
배열.forEach(function(value, index){
    console.log(`${index}번째의 값은 ${value}`)
})
//filter -> 함수에서 true or false가 오는것을 예측해서 나오는 함수
let 배열 = [274,52,32,57]
배열 = 배열.filter(function(value,index){
    return value % 2 ===0
})
console.log(배열)

//map함수 기존의 배열을 기반으로 새로운 함수를 만들어 반환하는 함수
let 배열 = [273,52,103,32,57]
배열 = 배열.map(function(value, index){
    return value + "!!"
})
console.log(배열)    //결과값 -> 모든 배열뒤에 !!가 추가되어서 나온다.

//화살표함수 대괄호와 return을 날려버리고 간단하게 코드를 함축할 수 있다
let 배열 = [273,52,103,32,57]
배열 = 배열.map((value, index)=> value + "!!")
    console.log(배열)

let 배열 = [273,52,103,32,57]
    배열 = 배열.filter((value, index)=> value % 2===0)
        console.log(배열)


    