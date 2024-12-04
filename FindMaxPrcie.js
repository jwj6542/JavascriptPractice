//하나의 배열에서 최대값 찾기
//const max = function (array){
//    let output = array[0]
//    for(const value of array){
//        if(output<value){
//            output = value
//        }
//    }
//    return output
//}
//    console.log(max([1,2,3,4]))
// 


//두개의 배열에서 최대값 찾기
const max = function (첫번째요소,...나머지){
    if(Array.isArray(첫번째요소)){
        let output = 첫번째요소[0]
        for(const 값 of 첫번째요소){
            if(output< 값){
                output = 값
            }
    }
        return output
    }else{
        let output = 첫번째요소
        for (const 값 of 나머지){
            if(output <값){
                output = 값
            }
        }
        return output
    }
}
console.log(max([1,2,3,4]))
console.log(max(1,2,3,4))
     