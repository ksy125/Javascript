// const a = () => {
//     console.log("안녕하세요");
// }
// const b = () => {
//     console.log("점심시간이에요");
// }
// const c = () => {
//     console.log("배고파요");
// }

// const test = document.querySelector(".test");
// test.addEventListener('click', () => {
//     a(); // 출력 : 안녕하세요
//     b(); // 출력 : 점심시간이에요
//     c(); // 출력 : 배고파요
// });


// 3종류의 버튼을 누르면 아래와 같이 출력되도록 만들기
// 아침 : 아침 -> 점심 -> 저녁
// 점심 : 점심 -> 저녁 -> 아침
// 저녁 : 저녁 -> 아침 -> 점심
const a = () => {
    console.log("아침");
}
const b = () => {
    console.log("점심");
}
const c = () => {
    console.log("저녁");
}
const breakfast = document.querySelector(".breakfast");
const lunch = document.querySelector(".lunch");
const dinner = document.querySelector(".dinner");

breakfast.addEventListener('click', () => {
    a();
    b();
    c();
});
lunch.addEventListener('click', () => {
    b();
    c();
    a();
});
dinner.addEventListener('click', () => {
    c();
    a();
    b();
});