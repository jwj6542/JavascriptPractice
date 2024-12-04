//객체의 속성을 정적으로 생성한다 -> 처음 만들때 같이 만드는것
const pet ={
    name : "설탕",
    age : 8
}
//객체의 속성을 동적으로 생성한다 -> 나중에 만드는 것
pet.color = "white"
//객체의 키와 값을 동적으로 제거한다!
delete pet.color
//출력
console.log(pet) 

//연습문제 1  기본 객체만들기
const study = {
    name : "혼자 공부하는 파이썬",
    price : 18000,
    publisher : "한빛미디어"
}
console.log(study)
  

//연습문제 this.활용
const object = {
    ko :"빵",
    en: "bread",
    ja: "빵상",
    fr: "pain",
    es: "pan",
    lang:{
        ko: "한국어",
        en: "영어",
        ja: "일본어",
        fr: "프랑스어",
        es: "스페인어"
    },
    print : function(lang = "es"){
        console.log(`${this.ko}는 ${this.lang[lang]로 ${this[lang]}입니다`)
    }
}
object.print("es") //결과 빵은 스페인어로 pan입니다
