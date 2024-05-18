// const 변수이름 = 데이터[기본 + 참조]
// 기본 타입 : 숫자, 문자
// 타입 변환

// 1. 숫자 타입
// const a = 7(숫자)
// const b = 3.14(숫자)
// const c = 12903812903(숫자)

// // 2. 문자 타입
// const d = '1293129'
// const e = "바닐라라떼"
// const f = `민트초콜렛` // 백팁

// const g = `내 최애 음료는: ${e}` // 변수 처리하려면 : `${}`
// console.log(g) // 결과는 바닐라라떼


//Q1. 프롬프트를 이용해서
// 1. 당신의 mbti?
// 2. 당신의 최애 음식?
// alert으로 당신의 mbti는 ~~, 최애 음식은 ~~이군요!
// const mbti = prompt("당신의 MBTI는?");
// const food = prompt("당신의 최애 음식은?");
// window.alert(`당신의 MBTI는 ${mbti}, 최애 음식은 ${food}이군요!`);


//Q2. 오늘의 날짜는 무엇인가요?
// 오늘의 일정은 무엇인가요?
// 오늘의 날짜는 {}이고, {}을 하실 예정이시군요!
// const date = prompt("오늘의 날짜는 무엇인가요?");
// const plan = prompt("오늘의 일정은 무엇인가요?");
// alert(`오늘의 날짜는 ${date}이고, ${plan}을 하실 예정이시군요!`);


//Q3. 첫 번째 수 입력
// 두 번째 수 입력
// 두 수의 합은 ~~입니다.
// const first = prompt("첫 번째 수 입력");
// const second = prompt("두 번째 수 입력");
// const numFirst = Number(first);
// const numSecond = Number(second);
// alert(`두 수의 합은 ${numFirst + numSecond}입니다.`);


//Q4. 1) 몇 살임? -> 20
//    html에 h1태그로 된 2005년생이시군요.
// const age = prompt("몇 살이십니까?");
// const numAge = Number(age);
// const years = document.createElement("h1");
// years.innerText = `${2024 - numAge + 1}년생이시군요!`;
// document.body.appendChild(years);

//Q5. 정사각형의 한 변의 길이 -> 10
//    html에 정사각형의 넓이는 100입니다.
// const length = prompt("정사각형 한 변의 길이?");
// const numLength = Number(length);
// const widthTag = document.createElement("h1");
// widthTag.innerText = `정사각형의 넓이는 ${numLength*numLength}입니다.`;
// document.body.appendChild(widthTag);