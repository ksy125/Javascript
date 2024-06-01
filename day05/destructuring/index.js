// destructuring : 분해

// 배열 구조분해
// const week = ["월", "화", "수", "목", "금"];
// const [monday, ...rest] = week; // 월, 나머지
// const [monday, tuesday, ...rest] = week; // 월, 화, 나머지
// const [monday, rest] = week; // 월, 화

// 객체 구조분해
// const kimbab = {
//     name:"참치김밥",
//     ingredients: ["참치", "김", "밥", "단무지"],
//     price: 4000,
//     sidedish: {
//         main: "김치",
//         soup: "된장국"
//     }
// };

// 구조분해 후 renaming
//const { name:kimbabName, price, ingredients, sidedish } = kimbab;
// const [tuna, ...rest] = kimbab.ingredients; // 참치, 나머지
// const { soup:KoreanSoup } = kimbab.sidedish; // 된장국
// const { sidedish: { main, soup } } = kimbab;
// console.log(main); // 김치
// console.log(kimbabName); // 참치김밥
// console.log(price); // 가격


// const users = [
//     { id: 1, name: "Alice", age: 25},
//     { id: 2, name: "Bob", age: 30},
//     { id: 3, name: "Charlie", age: 35},
// ];

// 1. v를 쓰지 않고, forEach 이름과 나이 콘솔로 나타내기
// users.forEach(({name, age}) => console.log(`${name} and ${age}`));
//     // 변수명 바꾸기
//     users.forEach(({name:englishName, age:koreanAge}) => 
//         console.log(`${englishName} and ${koreanAge}`));


// 2.  [{name:alice, age:25}, {name:Bob, age:30}, {name:Charlie, age:35}]; 출력하기(id 제외)
// const a = users.map(({name, age}) => {
//     return { name: name, age: age };
// });
// console.log(a);
//const a = users.map(({name, age}) => 
//    ({name: name, age: age })); // 축약ver

// const ori = users.map({ name, age }) = ({
//     return {name: name, age: age};
// });

// const a = users.map(({name, age}) => ({name: name, age: age }));
// const b = users.map(({name, age}) => ({name, age }));
// const c = users.map(({name, age}) => ({english: name, old: age }));
// const d = users.map(({ name: english, age: old }) => ({ english, old}));

// const e = users.map(({name, age, nation = 'Korean'}) => ({
//     name,
//     age,
//     nation
// }));