// array, object의 차이점
// 배열 안의 값을 요소
const array = [100, 20 , "문자열", true, function(){}, () => {}]

//객체 안의 값을 속성   -> object 안의 name 속성이라 부름
const object의 = {
      //식별자 (키라 적힌곳) 의 기본적인 조건 : 숫자로 시작하지 않는다
    //키 : 값,
    // 키 : 값
    name: "구름",
    age: 7,
    bark function (){}  // 객체 안의 함수를 메서드라 부름
    console.log(`${object.name}이/가 짖습니다!`)   // -> 구름이/가 짖습니다
}
// object["name"]  방법1
//bject.name 방법 2 배열에서 값을 가져나오듯 객체에 선언이 되어있어서 앞과같이 호출가능
object.name = "별"  //객체 안의 값 변경
object.age = 1
//-> 평소에 가장 많이 사용하는방법 방법2
console.log(object.name)
console.log(object.age)

//화살표 함수로 메서드 만들기

const dog = {
    name1 : "설탕",
    age1 : 5,
    sleep : () => {
        console.log(`${dog.name1}이/가 잡니다`)
    }
}
dog.sleep()    // 화살표 함수에서는 익명함수와 달리 객체에 this.사용 불가

 