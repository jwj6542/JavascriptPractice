함수()
함수 = function(){
    console.log("익명함수입니다")  //선언이 되어있지 않아 후실행
}
function 함수(){
    console.log("선언적 함수입니다") //선언이 되어있어 선실행 - 실행이 먼저된후 위에 함수가 뒤집어 써서 후실행
}
함수()

// filter함수의 콜백 함수 부분을 채워서 홀수, 100이하의 수, 5로나눈 나머지가 0인수만 추출

let numbers = [273,25,75,52,103,32,57,25,76]

//홀수만 추출]
numbers = numbers.filter((value)=> value % 2 ===1)
console.log(numbers)
// 100이하의 수만 추출
numbers = numbers.filter((value)=> value <= 100)
console.log(numbers)
// 5로나눈 나머지가 0인 수만 추출
numbers = numbers.filter((value) => value % 5===0)

console.log(numbers)



// forEach를 사용하는 반복문 메소드
const array = ["사과", '배', '귤', '바나나']

console.log("# for in 반복문")
//for (const i in array){
    console.log(i)
//}
array.forEach(function(value,index,array){
    console.log(index)
})
console.log("# for of 반복문")
//    console.log(i) //
//}
array.forEach((value,index) =>{
    console.log(value)
})