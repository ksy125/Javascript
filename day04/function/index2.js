// 함수 : input[str, num, bool, array, element, function] -> output

// function text(x) { // 100을 돌려주는 함수
//     // input을 할 타입
//     // : str, num, bool, array, element, function 중 
//     // '함수'로 사용함.
//     x(); // x를 함수로 가정
//     return 100;
// }

// function abc(x) {
//     x();
//     return 1;
// }
// function kim() {
//     console.log(`김씨 안녕`);
// }
// abc(kim);


// 콜백함수 (함수안에 함수를 넣는 것) 
// - ex) 합성함수 f(g(x))
function getTen(x) {
    return 10;
}

function getOne(y) {
    return 1;
}

function abc(x, y) {
    return x() + y();
}
abc(getTen, getOne); // 11

// 화살표 함수
// const getTen = () => 10
// const getOne = () => 1;
// const abc = (x, y) => x() + y();
// abc(getTen, getOne); // 11

const arr = [1, 10, "apple", "banana", 3];

const test = (x) => console.log(`${x}입니다.`);
arr.forEach(test) = (x) => {
    console.log(`${x}입니다.`);
}
// 위와 아래는 같다?
arr.forEach(test);
arr.forEach((v)=> {
    console.log(`${v}입니다.`);
})