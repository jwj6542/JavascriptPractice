//많은 양의 메서드가 나옴. 그냥 다 외우는게 편함

// 소수점 몇번째 자리까지 자르는 객체 toFixed 메서드
const a = 123.45678
a.toFixed(1) // 소수점 1번째 자리  --괄호에 넣은 수에 비례해 몇번째 자리까지인지 보여줌

// Number.isNaN() -- 매게변수에 NaN이 오면 true 아닐시 false를 출력
Number("안녕하세요")  => NaN 출력

const b = Number("안녕하세요")
Number.isNaN(b)  => true 출력
// is.00으로 시작하는 메서드는 대게 true or false로 출력을 받음

//isFinite 무한하다는 의미
Number.isFinite(10) //true
Number.isFinite(10.10) //true

Number.isFinite(inf) // false

//string 객체의 메서드
//trim 앞뒤의 공백을 제거하는 메서드
ex) "   산책가기싫어   "  -> "   산책가기싫어   "
    "   산책가기싫어   ".trim -> "산책가기싫어"

//split 쉼표가 많이 들어간 문자열에 배열로 만들고 싶을때 사용
ex) '21.0.02,조우진,김밥집,2000'.split(",") -> ["21.0.02", "조웆진", "김밥집", "2000"]
    '21.0.02 조우진 김밥집 2000'.split(" ") ->["21.0.02", "조웆진", "김밥집", "2000"]
    '21.0.02 | 조우진 | 김밥집 | 2000'.split("|")->["21.0.02", "조웆진", "김밥집", "2000"]
    //글을 나눌때 사용된 기호를 괄호안에 넣어야지 배열로 만들어줌

//mateh 객체 -> 수학과 관련된 값을 가져와줌
Math.E // 자연상수
Math.PI // 파이값
Math.floor(10.1) // 내림 10이 출력
Math.ceil (10.1) // 올림 11이 출력
Math.round(10.4) // 반올림 10 출력
Math.max(42,521,21) // 최대값을 구함 521출력
Math.min(42,521,5212) // 최솟값을 구함 42출력
Math.random() // 0~1 사이의 랜덤한 숫자를 출력함

//0~50사이의 정수는 어떻게 만드나요?
Math.random() * 50
Math.floor(Math.random())
