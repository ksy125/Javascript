// 비동기 : 동시에 여러 작업을 처리할 수 있게 해주는 것
// Array, Object, Element, Date, Promise
// Promise : 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과값 나타냄
// Promise에서는 상태가 3가지 : 대기중[pending], 성공[Fulfilled], 실패[Rejected]

// const a 성공('탕후루') -> success
// const b 실패('사탕) -> fail

// const a = new Promise((success, fail) => {
//     // 백엔드에 데이트를 가져오는 코드
//     setTimeout(() => {
//         success('탕후루');
//     }, 3000);
// });
// a.then((v) => console.log(v));

// const b = new Promise((success, fail) => {
//     setTimeout(() => {
//         success(10);
//     }, 1000);
// });
// b.then((v) => {
//     console.log(v); // 10
//     return v * 10; // 10*10
// }).then((v) => {
//     console.log(v); // 100
// });

// name을 대문자화 시키고 return 해주기
 // price를 두 배해서 return 해주기
 // 콘솔로그 찍기
const b = new Promise((success, fail) => {
    setTimeout(() => {
        success({name: 'americano', price:3000});
    }, 1000);
});

// b.then((v) => {
//     v.name = v.name.toUpperCase();
//     return v;
// }).then((v) => {
//     v.price *= 2;
//     return v;
// }).then((v) => {
//     console.log(v);
// });

const c = { price: 3000 };
// b.then((v) => console.log(v)).catch((v) => console.log(`캐치 : ${v}`));

// 복습 : 여기 내용 다시 쓰기? (2시~)