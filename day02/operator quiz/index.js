// console.log로 출력.
// 프롬프트에 아무것도 넣지 않으면, 아무것도 입력 안했어요! 출력

// 1. 영어 점수를 입력 받고, 60점 이상 [합격입니다. 아니면 불합격 입니다]
const score = Number(prompt("영어 점수는?"));
const isPass = score >= 60 ? "합격" : "불합격";
console.log(`영어 합격여부 : ${isPass}입니다.`);

// 2. 정수를 입력 받고, 양수인지 음수인지 알려주기
const num = Number(prompt("정수 입력"));
const isPositive = num > 0 ? "양수" : "음수";
console.log(`${num}은 ${isPositive}입니다.`);

// 3. 두 정수를 입력 받고, 큰 수를 출력하기
const first = Number(prompt("첫 번째 수"));
const second = Number(prompt("두 번째 수"));
const bigger = first > second ? first : second;
console.log(`더 큰 수는 : ${bigger}`);

// 4. 정수를 입력 받고, 절대값으로 바꾸기
const num1 = Number(prompt("정수 입력"));
const absNum = num1 > 0 ? num1 : -num1;
console.log(`절대값은 ${absNum}`);

// 5. 정수를 입력 받고, 홀수인지 짝수인지 알려주기
const num2 = Number(prompt("정수 입력"));
const oddOrEven = num2 % 2 === 1 ? "홀수" : "짝수";
console.log(`${num2}은/는 ${oddOrEven}입니다.`);


// 프롬프트에 아무것도 넣지 않았을 때 문자 입력 예시
const username = prompt("이름 입력") || "Guest";
console.log(`이름 : ${username}`)